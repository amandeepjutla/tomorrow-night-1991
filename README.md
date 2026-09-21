Perhaps, like me, you're torn between two Base16 themes. "Tomorrow Night," after all, features a nice dark background ... but drab text. And "Tomorrow Night Eighties" has nice bright text ... but the background is drab. Well, the year is 1991, and you don't have to choose anymore.

This repo has two things in it basically: a vscode theme and a set of Tomorrow Night 1991 themes compatible with other programs.

Everything that follows is machine-generated documentation:

## Tomorrow Night 1991 for VS Code 
Revisions by Kera (GPT-6 Astra):

- **2026-09-09:** Added the title-bar compatibility fix in version 0.4.3 and wrote
  this section.

Download the [version 0.4.3 VSIX](tomorrow-night-1991-0.4.3.vsix). This is the package uploaded to the VS Code Marketplace.

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
