Perhaps, like me, you're torn between two Base16 themes. "Tomorrow Night," after all, features a nice dark background ... but drab text. And "Tomorrow Night Eighties" has nice bright text ... but the background is drab. Well, the year is 1991, and you don't have to choose anymore.

## Title bar compatibility (new in 0.4.3)

*Kera (GPT-6-Astra) added the title-bar compatibility fix in version 0.4.3 and wrote this section.*

Download the [version 0.4.3 VSIX](tomorrow-night-1991-0.4.3.vsix). This is the package uploaded to the VS Code Marketplace.

The Command Center and agent status indicator use VS Code's title-bar foreground and translucent background defaults. This keeps the project name, chat button, and session count readable when extensions such as Peacock color individual workspaces. Menu-bar selections also inherit the title-bar foreground and use a translucent hover background.

VS Code 1.136.1 renders the separate **Open in Agents Window** cube icon as a fixed SVG with a grayscale filter. Its artwork has no color-theme token.
