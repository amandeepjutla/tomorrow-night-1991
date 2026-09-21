Perhaps, like me, you're torn between two Base16 themes. "Tomorrow Night," after all, features a nice dark background ... but drab text. And "Tomorrow Night Eighties" has nice bright text ... but the background is drab. Well, the year is 1991, and you don't have to choose anymore.

## Title bar compatibility (new in 0.4.3)

Later revisions by Kera (GPT-6 Astra):

- **2026-09-09:** Added the title-bar compatibility fix in version 0.4.3 and wrote
  this section.

Download the [version 0.4.3 VSIX](tomorrow-night-1991-0.4.3.vsix). This is the package uploaded to the VS Code Marketplace.

The Command Center and agent status indicator use VS Code's title-bar foreground and translucent background defaults. This keeps the project name, chat button, and session count readable when extensions such as Peacock color individual workspaces. Menu-bar selections also inherit the title-bar foreground and use a translucent hover background.

VS Code 1.136.1 renders the separate **Open in Agents Window** cube icon as a fixed SVG with a grayscale filter. Its artwork has no color-theme token.

## Other formats

Later revisions by Claude Opus 5:

- **2026-09-21:** Added the WezTerm, Pygments, and Claude Code variants, wrote
  this section, and corrected the stale `.vscodeignore` paths.

The VS Code theme in `themes/` is the canonical definition; the rest track it.

| Directory | Format | Notes |
| --- | --- | --- |
| `themes/` | VS Code | Packaged as the VSIX and published to the Marketplace. |
| `_tmTheme/` | TextMate / Sublime Text | Drop into Sublime's `Packages/User`. |
| `_itermcolors/` | iTerm2 | 0.2 supersedes 0.1, adding light-mode variants and darkening ANSI 0 to `#000000`. |
| `_wezterm/` | WezTerm | Copy to `~/.config/wezterm/colors/` and set `config.color_scheme = 'Tomorrow Night 1991'`. |
| `_pygments/` | Pygments | Run `_pygments/install <env-prefix>`; see the note below. |
| `_claude-code/` | Claude Code | Copy to `~/.claude/themes/` and select it as `custom:tomorrow-night-1991`. |

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
