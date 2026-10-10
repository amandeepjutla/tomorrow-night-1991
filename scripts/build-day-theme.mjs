#!/usr/bin/env node
// Kera (GPT-6.1 Sol), created 2026-10-10 for Amandeep Jutla.
// Build the VS Code light sibling from the existing Day palette and Night rules.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const night = JSON.parse(fs.readFileSync(path.join(root, 'themes/tomorrow-night-1991.json'), 'utf8'));
const daySource = JSON.parse(execFileSync('/usr/bin/plutil', [
  '-convert', 'json', '-o', '-', path.join(root, '_tmTheme/tomorrow-day-1991.tmTheme'),
], { encoding: 'utf8' }));
const base = daySource.settings[0].settings;
const sourceColor = name => {
  const rule = daySource.settings.find(rule => rule.name === name);
  if (!rule?.settings.foreground) throw new Error(`Missing Day palette rule: ${name}`);
  return rule.settings.foreground.toLowerCase();
};

const luminance = hex => {
  const c = hex.slice(1, 7).match(/../g).map(h => parseInt(h, 16) / 255)
    .map(x => x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
  return c[0] * 0.2126 + c[1] * 0.7152 + c[2] * 0.0722;
};
const contrast = (a, b) => (Math.max(luminance(a), luminance(b)) + 0.05)
  / (Math.min(luminance(a), luminance(b)) + 0.05);
const shade = (hex, scale) => '#' + hex.slice(1, 7).match(/../g)
  .map(h => Math.round(parseInt(h, 16) * scale).toString(16).padStart(2, '0')).join('');
// Keep each hue readable on the darkest neutral surface that carries colored text.
const readable = seed => {
  for (let step = 0; step <= 200; step++) {
    const color = shade(seed, 1 - step / 200);
    if (contrast(color, '#e3e6eb') >= 4.6) return color;
  }
  throw new Error(`Cannot make ${seed} readable`);
};
const palette = {
  red: readable(sourceColor('Variables, Parameters')),
  orange: readable(sourceColor('Number, Constant, Function Argument, Tag Attribute, Embedded')),
  yellow: readable(sourceColor('Class, Support')),
  green: readable(sourceColor('String, Symbols, Inherited Class, Markup Heading')),
  cyan: readable(sourceColor('Regular Expressions')),
  blue: readable(sourceColor('Function, Special Method')),
  purple: readable(sourceColor('Keyword, Storage')),
  brown: readable(sourceColor('Invalid - Deprecated')),
  comment: readable('#4d7384'),
  foreground: base.foreground.toLowerCase(),
  background: base.background.toLowerCase(),
  line: base.lineHighlight.toLowerCase(),
};
const foregroundMap = {
  '#1d1f21': palette.foreground, '#282a2e': palette.foreground,
  '#373b41': '#62656a', '#393939': '#62656a',
  '#cccccc': palette.foreground, '#c5c8c6': palette.foreground,
  '#e0e0e0': '#1d1f21', '#ffffff': '#1d1f21', '#f2f0ec': palette.foreground,
  '#b4b7b4': '#5a5c5f', '#999999': '#62656a', '#969896': '#62656a',
  '#f2777a': palette.red, '#f99157': palette.orange, '#ffcc66': palette.yellow,
  '#99cc99': palette.green, '#66cccc': palette.cyan, '#6699cc': palette.blue,
  '#cc99cc': palette.purple, '#a3685a': palette.brown,
  '#81a2be': palette.blue, '#f0c674': palette.yellow, '#de935f': palette.orange,
  '#ff00ff': palette.purple, '#ff0000': palette.red,
  '#545963': '#74767a', '#000000': palette.foreground, '#7cafc2': palette.comment,
};
const backgroundMap = {
  '#1d1f21': palette.background, '#282a2e': palette.line,
  '#373b41': '#e3e6eb', '#393939': '#f4f5f7',
  '#cccccc': '#e3e6eb', '#c5c8c6': '#e3e6eb',
  '#b4b7b4': '#d7dde5', '#999999': '#c4c9d1', '#969896': '#c4c9d1',
  '#e0e0e0': '#e3e6eb', '#ffffff': '#dceaff', '#000000': '#000000',
};
const normalize = value => value.length === 4
  ? '#' + [...value.slice(1)].map(c => c + c).join('') : value.toLowerCase();
const mapColor = (value, background = false) => {
  const hex = normalize(value), rgb = hex.slice(0, 7), alpha = hex.slice(7);
  const mapped = (background ? backgroundMap[rgb] : undefined) ?? foregroundMap[rgb];
  if (!mapped) throw new Error(`Unmapped Night color: ${value}`);
  return mapped + alpha;
};
const colors = Object.fromEntries(Object.entries(night.colors).map(([key, value]) => [
  key, mapColor(value, /Background$|\.background$/.test(key)),
]));
Object.assign(colors, {
  'focusBorder': palette.blue,
  'selection.background': '#dceaff',
  'widget.shadow': '#00000026',
  'widget.border': '#b3b5b9',
  'textBlockQuote.background': '#f4f5f7',
  'textBlockQuote.border': palette.blue,
  'textSeparator.foreground': '#74767a',
  'toolbar.hoverBackground': '#e3e6eb80',
  'toolbar.activeBackground': '#e3e6eb',
  'button.background': palette.blue,
  'button.foreground': '#ffffff',
  'button.hoverBackground': shade(palette.blue, 0.85),
  'button.secondaryBackground': palette.purple,
  'button.secondaryForeground': '#ffffff',
  'button.secondaryHoverBackground': shade(palette.purple, 0.85),
  'checkbox.border': '#74767a',
  'dropdown.border': '#74767a',
  'input.border': '#74767a',
  'inputOption.activeBackground': '#dceaff',
  'inputOption.activeBorder': palette.blue,
  'inputValidation.errorBackground': '#fde8e7',
  'inputValidation.errorForeground': palette.foreground,
  'inputValidation.infoBackground': '#dceaff',
  'inputValidation.infoForeground': palette.foreground,
  'inputValidation.warningBackground': '#f6e8b0',
  'inputValidation.warningForeground': palette.foreground,
  'progressBar.background': palette.blue,
  'badge.background': palette.blue,
  'badge.foreground': '#ffffff',
  'list.activeSelectionBackground': base.selection,
  'list.activeSelectionForeground': palette.foreground,
  'list.activeSelectionIconForeground': palette.foreground,
  'list.focusBackground': base.selection,
  'list.focusForeground': palette.foreground,
  'list.focusHighlightForeground': palette.foreground,
  'list.inactiveSelectionBackground': '#e3e6eb',
  'list.inactiveSelectionForeground': '#5a5c5f',
  'list.inactiveFocusBackground': '#e3e6eb',
  'list.inactiveFocusOutline': '#62656a',
  'list.highlightForeground': palette.blue,
  'list.hoverBackground': '#eef0f3',
  'list.dropBackground': '#dceaff80',
  'activityBar.background': '#f4f5f7',
  'activityBar.border': '#b3b5b9',
  'activityBar.dropBackground': '#dceaff80',
  'activityBarBadge.foreground': '#ffffff',
  'sideBar.background': '#f4f5f7',
  'sideBar.border': '#b3b5b9',
  'editorGroup.border': '#b3b5b9',
  'editor.selectionBackground': '#dceaff',
  'editor.inactiveSelectionBackground': '#e3e6eb80',
  'editor.selectionHighlightBackground': '#a3cafe30',
  'editor.wordHighlightBackground': '#a3cafe40',
  'editor.wordHighlightStrongBackground': '#a3cafe40',
  'editor.wordHighlightStrongBorder': palette.purple,
  'editor.findMatchBackground': '#f6e8b080',
  'editor.findMatchBorder': palette.yellow,
  'editor.findMatchHighlightBackground': '#f6e8b050',
  'searchEditor.findMatchBackground': '#f6e8b080',
  'editor.findRangeHighlightBackground': '#e3e6eb40',
  'editor.rangeHighlightBackground': '#e3e6eb40',
  'editor.hoverHighlightBackground': '#a3cafe30',
  'editor.lineHighlightBackground': palette.line,
  'editorWhitespace.foreground': '#74767a',
  'editorIndentGuide.background1': '#b3b5b9',
  'editorIndentGuide.activeBackground1': '#62656a',
  'editorRuler.foreground': '#b3b5b9',
  'editorBracketMatch.background': '#a3cafe40',
  'editorBracketMatch.border': palette.blue,
  'editorSuggestWidget.selectedBackground': base.selection,
  'editorSuggestWidget.selectedForeground': palette.foreground,
  'editorSuggestWidget.focusHighlightForeground': palette.foreground,
  'editorSuggestWidget.border': '#74767a',
  'editorHoverWidget.border': '#74767a',
  'editorWidget.border': '#74767a',
  'peekViewResult.selectionBackground': base.selection,
  'peekViewResult.selectionForeground': palette.foreground,
  'diffEditor.insertedTextBackground': '#99cc9920',
  'diffEditor.removedTextBackground': '#f2777a20',
  'diffEditor.insertedLineBackground': '#e8f8e880',
  'diffEditor.removedLineBackground': '#ffedec80',
  'peekViewEditor.matchHighlightBackground': '#f6e8b050',
  'peekViewEditor.matchHighlightBorder': palette.yellow,
  'peekViewResult.matchHighlightBackground': '#f6e8b050',
  'merge.currentContentBackground': '#a3cafe20',
  'merge.currentHeaderBackground': '#a3cafe50',
  'merge.incomingContentBackground': '#99cc9920',
  'merge.incomingHeaderBackground': '#99cc9950',
  'panel.border': '#b3b5b9',
  'statusBar.background': '#eef0f3',
  'statusBar.debuggingForeground': '#ffffff',
  'statusBar.noFolderForeground': palette.foreground,
  'statusBarItem.activeBackground': '#e3e6eb',
  'statusBarItem.prominentForeground': '#ffffff',
  'statusBarItem.prominentHoverBackground': shade(palette.purple, 0.85),
  'statusBarItem.errorForeground': '#ffffff',
  'statusBarItem.warningForeground': '#ffffff',
  'titleBar.activeBackground': '#eef0f3',
  'titleBar.inactiveBackground': '#f4f5f7',
  'menubar.selectionBackground': '#00000014',
  'menu.border': '#b3b5b9',
  'menu.separatorBackground': '#b3b5b9',
  'notification.buttonForeground': '#ffffff',
  'notification.buttonHoverBackground': shade(palette.blue, 0.85),
  'notification.infoForeground': '#ffffff',
  'notification.warningForeground': '#ffffff',
  'notification.errorForeground': '#ffffff',
  'extensionButton.prominentForeground': '#ffffff',
  'extensionButton.prominentHoverBackground': shade(palette.green, 0.85),
  'extensionBadge.remoteForeground': '#ffffff',
  'quickInputList.focusBackground': base.selection,
  'quickInputList.focusForeground': palette.foreground,
  'quickInputList.focusIconForeground': palette.foreground,
  'terminal.ansiBlack': palette.foreground,
  'terminal.ansiBrightBlack': '#62656a',
  'terminal.ansiWhite': palette.foreground,
  'terminal.ansiBrightWhite': '#1d1f21',
  'terminal.selectionBackground': '#dceaff',
  'terminal.inactiveSelectionBackground': '#e3e6eb80',
  'debugView.stateLabelForeground': '#ffffff',
  'testing.message.error.lineBackground': '#ffedec80',
  'testing.message.info.lineBackground': '#dceaff40',
  'editor.snippetTabstopHighlightBackground': '#a3cafe30',
  'editor.snippetFinalTabstopHighlightBackground': '#a3cafe40',
  'editor.snippetFinalTabstopHighlightBorder': palette.blue,
  'welcomePage.progress.background': '#e3e6eb',
  'notebook.editorBackground': '#ffffff',
  'notebook.cellEditorBackground': '#ffffff',
  'notebook.cellBorderColor': '#b3b5b9',
  'notebook.focusedCellBorder': palette.blue,
  'notebook.focusedEditorBorder': palette.blue,
  'notebook.inactiveFocusedCellBorder': '#62656a',
  'notebook.inactiveSelectedCellBorder': '#74767a',
  'notebook.selectedCellBorder': palette.blue,
  'notebook.cellInsertionIndicator': palette.blue,
  'notebook.focusedCellBackground': '#eef0f340',
  'notebook.selectedCellBackground': '#a3cafe20',
  'notebook.cellHoverBackground': '#eef0f340',
});

const tokenColors = night.tokenColors.map(rule => ({
  ...rule,
  settings: {
    ...rule.settings,
    ...(rule.settings.foreground ? { foreground: mapColor(rule.settings.foreground).slice(0, 7) } : {}),
  },
}));
const day = {
  $schema: night.$schema, name: 'Tomorrow Day 1991', type: 'light', colors, tokenColors,
};
const destination = process.argv[2]
  ? path.resolve(process.argv[2]) : path.join(root, 'themes/tomorrow-day-1991.json');
fs.writeFileSync(destination, JSON.stringify(day, null, 2) + '\n');
console.log(`Built ${destination}: ${Object.keys(colors).length} UI colors, ${tokenColors.length} syntax rules.`);
