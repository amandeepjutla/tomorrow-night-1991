;; base16-tomorrow-night-1991-theme.el -- A base16 colorscheme  -*- lexical-binding: t; -*-

;;; Commentary:
;; Base16: (https://github.com/tinted-theming/home)
;; Theme:  (https://github.com/amandeepjutla/tomorrow-night-1991)
;;
;; Tomorrow Night 1991 is Base16 Tomorrow Night Eighties with base00, base01,
;; and base02 taken from Base16 Tomorrow Night: the darker background and
;; greys of the one, the brighter accents of the other.

;; In a terminal, set this BEFORE loading the theme:
;;
;;     (setq base16-theme-256-color-source 'colors)
;;
;; base16 otherwise emits ANSI color names on a terminal display, which assumes
;; the terminal's own palette is already this scheme. If it is not, mode-line
;; lands on a literal brightyellow and mode-line-inactive on brightgreen.

;;; Authors:
;; Scheme:   Amandeep Jutla, based on work by Chris Kempson (http://chriskempson.com)
;; Template: Kaleb Elwert <belak@coded.io>
;; Port:     Claude Opus 5, 2026-09-21, at the request of Amandeep Jutla

;;; Code:

(require 'base16-theme)

(defvar base16-tomorrow-night-1991-theme-colors
  '(:base00 "#1d1f21"
    :base01 "#282a2e"
    :base02 "#373b41"
    :base03 "#999999"
    :base04 "#b4b7b4"
    :base05 "#cccccc"
    :base06 "#e0e0e0"
    :base07 "#ffffff"
    :base08 "#f2777a"
    :base09 "#f99157"
    :base0A "#ffcc66"
    :base0B "#99cc99"
    :base0C "#66cccc"
    :base0D "#6699cc"
    :base0E "#cc99cc"
    :base0F "#a3685a")
  "All colors for Base16 Tomorrow Night 1991 are defined here.")

;; Define the theme
(deftheme base16-tomorrow-night-1991)

;; Add all the faces to the theme
(base16-theme-define 'base16-tomorrow-night-1991 base16-tomorrow-night-1991-theme-colors)

;; base16-theme does not touch the terminal menu faces, so they keep Emacs's
;; defaults: yellow on blue, with a red selection bar. Bring them into the
;; palette. A graphical Emacs on macOS uses the native menu bar and ignores
;; these.
(let ((line "#282a2e") (sel "#373b41") (fg "#cccccc")
      (dim "#999999") (accent "#ffcc66"))
  (custom-theme-set-faces
   'base16-tomorrow-night-1991
   `(menu                   ((t (:foreground ,fg :background ,line))))
   `(tty-menu-enabled-face  ((t (:foreground ,fg :background ,line))))
   `(tty-menu-disabled-face ((t (:foreground ,dim :background ,line))))
   `(tty-menu-selected-face ((t (:foreground ,accent :background ,sel :weight bold))))))

;; Mark the theme as provided
(provide-theme 'base16-tomorrow-night-1991)

(provide 'base16-tomorrow-night-1991-theme)

;;; base16-tomorrow-night-1991-theme.el ends here
