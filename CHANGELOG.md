# Changelog

## 0.5.0

- Include Tomorrow Day 1991 as a light theme in the same extension.
- Base it on the existing Day palette, with stronger text colors for tinted
  surfaces, blue-gray comments, green Markdown lists, and clear focus borders.
- Use pale editor selections and search/diff highlights to keep syntax readable;
  focused lists retain the existing Day selection blue with dark text.
- Add a repeatable build from the existing Day palette and Night syntax rules.

## 0.4.4

- Brighten CodeLens text and use dark text on pastel buttons, validation messages,
  badges, and status indicators, including their hover states.
- Distinguish focused list selections with brighter text and a blue outline;
  inactive selections use a darker background and dimmer text.
- Include blue-gray comments (`#7cafc2`) and green Markdown lists (`#99cc99`)
  as theme defaults, matching Amandeep's existing local customizations.

## 0.4.3

- Fix unreadable project names, chat controls, and session counts on title bars colored by Peacock. Command Center foregrounds and backgrounds now follow VS Code defaults, including the newer agent status indicator.
- Let menu-bar selection text inherit the title-bar foreground, with a translucent hover background that works on light and dark title bars.
