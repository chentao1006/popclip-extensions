#!/bin/bash

INPUT_TEXT="$POPCLIP_TEXT"

SHORTCUTS=$(shortcuts list)

SELECTED=$(osascript <<EOF
set theShortcuts to paragraphs of "$(echo "$SHORTCUTS" | sed 's/"/\"/g')"
choose from list theShortcuts with prompt "Select a shortcut to run: " default items {item 1 of theShortcuts}
EOF
)

if [ "$SELECTED" = "false" ] || [ -z "$SELECTED" ]; then
  exit 0
fi

SELECTED=$(echo "$SELECTED" | sed 's/^.*: //' | sed 's/^"//' | sed 's/"$//')

osascript -e 'tell application "Shortcuts" to run shortcut "'"$SELECTED"'" with input "'"$INPUT_TEXT"'"'
