Perhaps, like me, you're torn between two Base16 themes. "Tomorrow Night," after all, features a nice dark background ... but drab text. And "Tomorrow Night Eighties" has nice bright text ... but the background is drab. Well, the year is 1991, and you don't have to choose anymore.

This repo has two things in it basically: a vscode theme and a set of Tomorrow Night 1991 themes compatible with other programs.

Everything that follows is machine-generated documentation:

## Tomorrow Night 1991 for VS Code 
Revisions by Kera (GPT-6 Astra):

- **2026-09-09:** Added the title-bar compatibility fix in version 0.4.3 and wrote
  this section.

Later revisions by Kera (GPT-6.1 Sol):

- **2026-10-10:** Improved control and CodeLens contrast, distinguished focused
  list selections, and included Amandeep's comment and Markdown list colors in
  version 0.4.4.

Download the [version 0.5.0 VSIX](tomorrow-night-1991-0.5.0.vsix). Version 0.4.3
was uploaded to the VS Code Marketplace.

Comments use blue-gray `#7cafc2`, and Markdown lists use green `#99cc99`.
These are built into the VS Code theme. Existing local overrides with those
same values can stay in place or be removed without changing those colors.
The Base16 palette and the other application ports retain their existing
definitions.

The Command Center and agent status indicator use VS Code's title-bar foreground and translucent background defaults. This keeps the project name, chat button, and session count readable when extensions such as Peacock color individual workspaces. Menu-bar selections also inherit the title-bar foreground and use a translucent hover background.

VS Code 1.136.1 renders the separate **Open in Agents Window** cube icon as a fixed SVG with a grayscale filter. Its artwork has no color-theme token.

## Tomorrow Night 1991 in other formats
Revisions by Claude Opus 5:

- **2026-09-21:** Added the WezTerm, Pygments, and Claude Code variants, wrote
  this section, and corrected the stale `.vscodeignore` paths.
- **2026-09-21:** Added the Emacs and Neovim variants and documented the
  Base16 slot mapping.
- **2026-09-21:** Added the btop, broot, Midnight Commander, VisiData, nnn,
  and delta variants.
- **2026-09-21:** Fixed readability: the Emacs terminal color source, broot's
  near-invisible selected line, and the low-contrast Midnight Commander menus.
- **2026-09-21:** Gave the Emacs terminal menus palette colors instead of
  Emacs's yellow-on-blue defaults.

The VS Code theme in `themes/` is the canonical definition; the rest track it.

| Directory | Format | Notes |
| --- | --- | --- |
| `themes/` | VS Code | Packaged as the VSIX and published to the Marketplace. |
| `_tmTheme/` | TextMate / Sublime Text | Drop into Sublime's `Packages/User`. |
| `_itermcolors/` | iTerm2 | 0.2 supersedes 0.1, adding light-mode variants and darkening ANSI 0 to `#000000`. |
| `_wezterm/` | WezTerm | Copy to `~/.config/wezterm/colors/` and set `config.color_scheme = 'Tomorrow Night 1991'`. |
| `_pygments/` | Pygments | Run `_pygments/install <env-prefix>`; see the note below. |
| `_claude-code/` | Claude Code | Copy to `~/.claude/themes/` and select it as `custom:tomorrow-night-1991`. |
| `_emacs/` | Emacs | Needs `base16-theme`. Put it on `custom-theme-load-path`. In a terminal, also see the note below. |
| `_neovim/` | Neovim | A palette table for a palette-driven colorscheme plugin, not a standalone colorscheme. |
| `_btop/` | btop | Copy to `~/.config/btop/themes/` and set `color_theme`. Truecolor. |
| `_broot/` | broot | Copy to `~/.config/broot/skins/` and point a `luma: dark` import at it. Truecolor. |
| `_mc/` | Midnight Commander | Copy to `~/.local/share/mc/skins/` and set `skin=` in `ini`. Needs a truecolor terminal. |
| `_visidata/` | VisiData | Install as `~/.visidatarc`. Nearest xterm-256 indices; VisiData draws through curses. |
| `_nnn/` | nnn | Source it, or copy the two exports into your shell profile. xterm-256 indices. |
| `_delta/` | delta | Config only — delta reads bat's theme directory, so the tmTheme serves it directly. |

The terminal palettes share one ANSI set: black `#000000`, red `#f2777a`, green
`#99cc99`, yellow `#ffcc66`, blue `#6699cc`, magenta `#cc99cc`, cyan `#66cccc`,
white `#ffffff`, with the brights repeating the normals rather than lightening
them.

The Claude Code file sets interface colors only — prompt borders, diff
backgrounds, status and permission indicators. It carries no syntax-highlighting
tokens.

Pygments resolves built-in styles through its own `_mapping.py` rather than
through plugin entry points alone, so the style has to be registered in that
table. The `install` script does this, and needs re-running after a Pygments
upgrade or an environment rebuild.

### As a Base16 scheme

The palette is exactly Base16 Tomorrow Night Eighties with `base00`, `base01`,
and `base02` taken from Base16 Tomorrow Night. That is the whole idea of the
theme stated in sixteen slots: the darker background and greys of the one, the
brighter accents of the other.

| Slot | Color | From | Role |
| --- | --- | --- | --- |
| `base00` | `#1d1f21` | Tomorrow Night | Background |
| `base01` | `#282a2e` | Tomorrow Night | Current line |
| `base02` | `#373b41` | Tomorrow Night | Selection |
| `base03` | `#999999` | Eighties | Comments |
| `base04` | `#b4b7b4` | Eighties | Dark foreground |
| `base05` | `#cccccc` | Eighties | Foreground |
| `base06` | `#e0e0e0` | Eighties | Light foreground |
| `base07` | `#ffffff` | Eighties | Lightest |
| `base08` | `#f2777a` | Eighties | Red |
| `base09` | `#f99157` | Eighties | Orange |
| `base0A` | `#ffcc66` | Eighties | Yellow |
| `base0B` | `#99cc99` | Eighties | Green |
| `base0C` | `#66cccc` | Eighties | Cyan |
| `base0D` | `#6699cc` | Eighties | Blue |
| `base0E` | `#cc99cc` | Eighties | Purple |
| `base0F` | `#a3685a` | Eighties | Brown |

Any Base16 template can therefore generate a port for an editor this repository
does not cover yet.

### A note on color depth

The VS Code, TextMate, iTerm2, WezTerm, Emacs, Neovim, btop, broot, and
Midnight Commander ports carry the palette exactly. VisiData and nnn draw
through 256-color interfaces, so their files hold the nearest xterm-256 index
to each color rather than the color itself; the intended hex is in a comment
beside every value.

### Emacs in a terminal

base16 themes decide where terminal colors come from via
`base16-theme-256-color-source`, which defaults to `terminal`. That setting
emits ANSI color *names* rather than colors, on the assumption that the
terminal's own palette is already the same scheme. If it is not, the results
are not subtle: `mode-line` becomes a literal `brightyellow` bar and
`mode-line-inactive` a `brightgreen` one.

Unless you drive your terminal palette from base16-shell, set this before any
theme loads:

```elisp
(setq base16-theme-256-color-source 'colors)
```

A graphical Emacs is unaffected; it uses the hex values directly.

The theme also sets `menu`, `tty-menu-enabled-face`, `tty-menu-disabled-face`,
and `tty-menu-selected-face`, which base16 leaves alone. Emacs defaults those
to yellow on blue with a red selection bar, which no theme survives. A
graphical Emacs on macOS uses the native menu bar and ignores them.

## Tomorrow Day 1991
Revisions by Claude Opus 5.5:

- **2026-10-06:** Added the light sibling in six formats and wrote this
  section.

Later revisions by Kera (GPT-6.1 Sol):

- **2026-10-10:** Added the VS Code edition, its readability adjustments, and
  this edition's usage and build notes.

A light sibling, for a white page. It exists in VS Code and six of the formats
above. The table here defines the palette used by the original ports. The hues are
Tomorrow's light ones, darkened where needed: every text color reaches a
contrast of at least 4.5:1 on `#ffffff`.

The VS Code edition keeps those hues and darkens them slightly further so
colored text remains readable on tinted interface surfaces and the current line.
Comments use a darker blue-gray, and Markdown lists use the Day green. Editor
selections are a paler blue than the original ports; focused lists keep their
stronger selection blue and use dark text. Focused notebook cells have blue
borders. The Night theme and the original Day ports keep their existing colors.

Choose **Tomorrow Day 1991** from **Preferences: Color Theme** after installing
version 0.5.0. Local Night customizations should be scoped to
`[Tomorrow Night 1991]` so their light text and dark notebook borders do not
override Day's colors. See [VS Code's theme customization syntax](https://code.visualstudio.com/docs/configure/themes#customize-a-color-theme).

To rebuild the VS Code Day edition, run `npm run build:day` on macOS. The
dependency-free script reads the existing Day TextMate palette with macOS's
`plutil` and combines it with the current Night scope rules; it resolves source
paths relative to its own directory. To write a review copy elsewhere, pass
the destination: `npm run build:day -- /path/to/tomorrow-day-1991.json`.

| Role | Day | Night |
| --- | --- | --- |
| Background | `#ffffff` | `#1d1f21` |
| Current line | `#eef0f3` | `#282a2e` |
| Selection | `#a3cafe` | `#373b41` |
| Comments | `#74767a` | `#999999` |
| Foreground | `#27292c` | `#cccccc` |
| Red | `#c82829` | `#f2777a` |
| Orange | `#b95a14` | `#f99157` |
| Yellow | `#8a6d00` | `#ffcc66` |
| Green | `#3c7c43` | `#99cc99` |
| Cyan | `#1b7c83` | `#66cccc` |
| Blue | `#4271ae` | `#6699cc` |
| Purple | `#8959a8` | `#cc99cc` |
| Brown | `#a06658` | `#a3685a` |

| File | Notes |
| --- | --- |
| `_tmTheme/tomorrow-day-1991.tmTheme` | The Night file's scope rules, in the same order. No value has an alpha channel: bat paints such a value opaque. |
| `_btop/tomorrow-day-1991.theme` | Meter ramps run from the hue to darker tones of it, where Night's run from a pale tint up to the hue. btop prints some numbers in ramp colors, so every step is readable text. |
| `_neovim/tomorrow-day-1991.lua` | The same thirteen keys. Set `background=light` as well. rusty draws line numbers in `selection` and has a dark `diff_background` default; both need overriding on a white page, as the file's header explains. |
| `_nnn/colors-day.sh` | Nearest xterm-256 indices that reach 4.5:1 on white. |
| `_delta/gitconfig-day` | `light = true` is required, because delta lists a theme it does not know as dark. Sets pale diff backgrounds to match. |
| `_claude-code/tomorrow-day-1991.json` | Select it as `custom:tomorrow-day-1991`. |

To have bat follow a light and a dark terminal, name both themes with
`--theme-light` and `--theme-dark` in its config.
