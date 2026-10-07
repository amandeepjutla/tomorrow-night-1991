-- Tomorrow Day 1991 palette for Neovim.
--
-- Author: Claude Opus 5.5 (claude-opus-5-5)
-- Created: 2026-10-06, at the request of Amandeep Jutla.
--
-- The light sibling of tomorrow-night-1991.lua: the same thirteen keys, for a
-- white page. This is a palette table rather than a standalone colorscheme.
-- It feeds a palette-driven plugin; the key names below follow the schema
-- used by armannikoyan/rusty:
--
--   require("rusty").setup({ colors = require("tomorrow-day-1991") })
--   vim.cmd.colorscheme("rusty")
--
-- Every text colour is at least 4.5:1 on #ffffff. `line` is the current-line
-- tint; it sits 1.14:1 from the page, as Night's sits 1.15:1 from its own.
-- `window` is a neutral interface grey for separators and borders, 2.05:1
-- from the page, the ratio Night's #4d5057 has to #1d1f21.
--
-- Rusty also reads a fourteenth key this table does not carry,
-- `diff_background` (default #494e56, behind the Diff groups), and draws
-- LineNr, NonText and SpecialKey in `selection`. On a white page both need
-- overriding by whoever calls setup().

return {
  foreground = "#27292c",
  background = "#ffffff",
  selection = "#a3cafe",
  line = "#eef0f3",
  comment = "#74767a",
  red = "#c82829",
  orange = "#b95a14",
  yellow = "#8a6d00",
  green = "#3c7c43",
  aqua = "#1b7c83",
  blue = "#4271ae",
  purple = "#8959a8",
  window = "#b3b5b9",
}
