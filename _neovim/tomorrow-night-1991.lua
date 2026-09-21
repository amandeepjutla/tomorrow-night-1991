-- Tomorrow Night 1991 palette for Neovim.
--
-- Author: Claude Opus 5
-- Created: 2026-09-21, at the request of Amandeep Jutla.
--
-- This is a palette table rather than a standalone colorscheme. It feeds a
-- palette-driven plugin; the key names below follow the schema used by
-- armannikoyan/rusty:
--
--   require("rusty").setup({ colors = require("tomorrow-night-1991") })
--   vim.cmd.colorscheme("rusty")
--
-- `window` is a neutral interface grey for separators and borders. It sits
-- outside the sixteen-color palette and is carried over unchanged.

return {
  foreground = "#cccccc",
  background = "#1d1f21",
  selection = "#373b41",
  line = "#282a2e",
  comment = "#999999",
  red = "#f2777a",
  orange = "#f99157",
  yellow = "#ffcc66",
  green = "#99cc99",
  aqua = "#66cccc",
  blue = "#6699cc",
  purple = "#cc99cc",
  window = "#4d5057",
}
