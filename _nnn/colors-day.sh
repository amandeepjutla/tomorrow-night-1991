# Tomorrow Day 1991 for nnn.
#
# Author: Claude Opus 5.5 (claude-opus-5-5)
# Created: 2026-10-06, at the request of Amandeep Jutla.
#
# The light sibling of the Tomorrow Night 1991 colors.sh. nnn takes xterm-256
# indices written as two hex digits, so these are indices near the palette
# rather than the palette itself. Each is at least 4.5:1 on a #ffffff page.
# Roles are those of colors.sh.
#
#   role     hex  index  RGB      for      on white
#   blue     19    25    #005faf  #4271ae  6.45
#   green    1d    29    #00875f  #3c7c43  4.53
#   yellow   5e    94    #875f00  #8a6d00  5.73
#   purple   61    97    #875faf  #8959a8  4.90
#   cyan     17    23    #005f5f  #1b7c83  7.49
#   orange   82   130    #af5f00  #b95a14  4.71
#   red      a0   160    #d70000  #c82829  5.40
#   grey     f3   243    #767676  #74767a  4.54
#   ink      eb   235    #262626  #27292c  15.13
#
# Two are not the nearest index. Blue: the nearest, 61 (#5f5faf), is violet
# and sits beside the purple; 25 keeps the hue. Cyan: 30 (#008787) is 4.36:1
# and 29 is already the green; 23 is the next step down the same hue.
#
# NNN_FCOLORS order is strict:
#   block, char, directory, executable, regular, hardlink,
#   symlink, missing, orphan, fifo, socket, unknown
#   5e  a0  19  1d  00  f3  61  f3  a0  5e  17  82
# Regular stays 00, the terminal's own foreground. nnn also draws the detail
# columns in the "missing" colour and empty files in the "unknown" colour.
export NNN_FCOLORS="5ea0191d00f361f3a05e1782"

# Eight context colors: blue, green, yellow, purple, cyan, orange, red, fg
export NNN_COLORS="#191d5e611782a0eb"
