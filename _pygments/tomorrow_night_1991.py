"""
    pygments.styles.tomorrow_night_1991
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    Tomorrow Night 1991: the Tomorrow Night background with the Tomorrow Night
    Eighties accent palette. Token assignments follow the scope rules in the
    theme's own tmTheme/VS Code definitions.

    https://github.com/amandeepjutla/tomorrow-night-1991

    Written by Claude Opus 5 on 2026-09-21 at the request of Amandeep Jutla.
"""

from pygments.style import Style
from pygments.token import (
    Comment, Error, Generic, Keyword, Literal, Name, Number, Operator, Other,
    Punctuation, String, Text, Token, Whitespace,
)

__all__ = ['TomorrowNight1991Style']

BACKGROUND = '#1d1f21'
CURRENT_LINE = '#282a2e'
SELECTION = '#373b41'
FOREGROUND = '#cccccc'
COMMENT = '#999999'
RED = '#f2777a'
ORANGE = '#f99157'
YELLOW = '#ffcc66'
GREEN = '#99cc99'
CYAN = '#66cccc'
BLUE = '#6699cc'
PURPLE = '#cc99cc'
BROWN = '#a3685a'


class TomorrowNight1991Style(Style):
    """Tomorrow Night 1991."""

    name = 'tomorrow-night-1991'

    background_color = BACKGROUND
    highlight_color = SELECTION
    line_number_color = COMMENT
    line_number_background_color = BACKGROUND
    line_number_special_color = '#b4b7b4'
    line_number_special_background_color = CURRENT_LINE

    styles = {
        Token:                  FOREGROUND,
        Text:                   FOREGROUND,
        Other:                  FOREGROUND,
        Whitespace:             SELECTION,
        Error:                  RED,                     # invalid, invalid.illegal

        Comment:                f'italic {COMMENT}',
        Comment.Preproc:        f'noitalic {PURPLE}',    # keyword.control.import
        Comment.PreprocFile:    f'noitalic {GREEN}',
        Comment.Special:        f'italic bold {COMMENT}',

        Keyword:                PURPLE,                  # keyword, storage.modifier
        Keyword.Constant:       ORANGE,                  # constant.language
        Keyword.Declaration:    YELLOW,                  # storage.type
        Keyword.Namespace:      PURPLE,                  # keyword.control.import
        Keyword.Type:           CYAN,                    # keyword.type

        Operator:               FOREGROUND,              # punctuation
        Operator.Word:          PURPLE,
        Punctuation:            FOREGROUND,

        Name:                   FOREGROUND,
        Name.Attribute:         BLUE,                    # entity.other.attribute-name
        Name.Builtin:           BLUE,                    # support.function
        Name.Builtin.Pseudo:    f'italic {RED}',         # variable.language (self, cls)
        Name.Class:             YELLOW,                  # entity.name, support.class
        Name.Constant:          ORANGE,                  # support.constant
        Name.Decorator:         BLUE,                    # entity.name.function.decorator
        Name.Entity:            BROWN,                   # punctuation.section.embedded
        Name.Exception:         YELLOW,                  # support.class
        Name.Function:          BLUE,                    # entity.name.function
        Name.Label:             BLUE,                    # entity.name.variable.field
        Name.Namespace:         YELLOW,                  # support.other.namespace
        Name.Property:          BLUE,                    # variable.other.object.property
        Name.Tag:               RED,                     # entity.name.tag
        Name.Variable:          RED,                     # variable, variable.parameter
        Name.Variable.Magic:    f'italic {RED}',

        Literal:                ORANGE,
        Literal.Date:           GREEN,
        Number:                 ORANGE,                  # constant.numeric

        String:                 GREEN,                   # string
        String.Affix:           PURPLE,                  # the f/b/r prefix
        String.Doc:             f'italic {GREEN}',
        String.Escape:          CYAN,                    # constant.character.escape
        String.Interpol:        BROWN,                   # variable.interpolation
        String.Regex:           CYAN,                    # string.regexp
        String.Symbol:          GREEN,                   # constant.other.symbol

        Generic:                FOREGROUND,
        Generic.Deleted:        RED,                     # markup.deleted
        Generic.Emph:           f'italic {RED}',         # markup.italic
        Generic.EmphStrong:     f'bold italic {RED}',
        Generic.Error:          RED,
        Generic.Heading:        f'bold {BLUE}',          # markdown.heading
        Generic.Inserted:       GREEN,                   # markup.inserted
        Generic.Output:         FOREGROUND,
        Generic.Prompt:         COMMENT,
        Generic.Strong:         f'bold {RED}',           # markup.bold
        Generic.Subheading:     f'bold {CYAN}',          # meta.separator
        Generic.Traceback:      RED,
    }
