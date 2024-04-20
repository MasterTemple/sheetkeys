const Commands = {
  // This character is U+0095, and is used as a separator in the string representation of a sequence
  // of keys. It cannot itself appear as a key.
  KEY_SEPARATOR: "•",

  // Commands will appear in the help dialog, grouped by "group", in the order that they're defined
  // in this map.
  commands: {
    // Cursor movement
    moveUp: {
      fn: SheetActions.moveUp.bind(SheetActions),
      name: "Move up",
      group: "movement",
    },
    moveDown: {
      fn: SheetActions.moveDown.bind(SheetActions),
      name: "Move down",
      group: "movement",
    },
    moveLeft: {
      fn: SheetActions.moveLeft.bind(SheetActions),
      name: "Move left",
      group: "movement",
    },
    moveRight: {
      fn: SheetActions.moveRight.bind(SheetActions),
      name: "Move right",
      group: "movement",
    },
    moveBack: {
      fn: SheetActions.moveBack.bind(SheetActions),
      name: "Move back",
      group: "movement",
    },
    moveBackTwice: {
      fn: SheetActions.moveBackTwice.bind(SheetActions),
      name: "Move back",
      group: "movement",
    },
    moveForwardToEnd: {
      fn: SheetActions.moveForwardToEnd.bind(SheetActions),
      name: "Move forward to end",
      group: "movement",
    },
    moveForwardToNext: {
      fn: SheetActions.moveForwardToNext.bind(SheetActions),
      name: "Move forward to next",
      group: "movement",
    },
    goToFirstColumn: {
      fn: SheetActions.goToFirstColumn.bind(SheetActions),
      name: "Go to first column",
      group: "movement",
    },

    // Row & column movement
    moveRowsDown: {
      fn: SheetActions.moveRowsDown.bind(SheetActions),
      name: "Move rows down",
      group: "movement",
    },
    moveRowsUp: {
      fn: SheetActions.moveRowsUp.bind(SheetActions),
      name: "Move rows up",
      group: "movement",
    },
    moveColumnsLeft: {
      fn: SheetActions.moveColumnsLeft.bind(SheetActions),
      name: "Move columns left",
      group: "movement",
    },
    moveColumnsRight: {
      fn: SheetActions.moveColumnsRight.bind(SheetActions),
      name: "Move columns right",
      group: "movement",
    },

    // Editing
    editCell: {
      fn: SheetActions.editCell.bind(SheetActions),
      name: "Edit cell",
      group: "editing",
    },
    substituteCell: {
      fn: SheetActions.substituteCell.bind(SheetActions),
      name: "Substitute cell",
      group: "editing",
    },
    editCellAppend: {
      fn: SheetActions.editCellAppend.bind(SheetActions),
      name: "Append to cell",
      group: "editing",
    },
    undo: {
      fn: SheetActions.undo.bind(SheetActions),
      name: "Undo",
      group: "editing",
    },
    redo: {
      fn: SheetActions.redo.bind(SheetActions),
      name: "Redo",
      group: "editing",
    },
    replaceChar: {
      fn: SheetActions.replaceChar.bind(SheetActions),
      name: "Replace",
      group: "editing",
    },
    openRowBelow: {
      fn: SheetActions.openRowBelow.bind(SheetActions),
      name: "Add and edit row below",
      group: "editing",
    },
    openRowAbove: {
      fn: SheetActions.openRowAbove.bind(SheetActions),
      name: "Add and edit row above",
      group: "editing",
    },
    insertRowBelow: {
      fn: SheetActions.insertRowBelow.bind(SheetActions),
      name: "Insert row below",
      group: "editing",
    },
    insertRowAbove: {
      fn: SheetActions.insertRowAbove.bind(SheetActions),
      name: "Insert row above",
      group: "editing",
    },
    deleteRowsOrColumns: {
      fn: SheetActions.deleteRowsOrColumns.bind(SheetActions),
      name: "Delete selected rows/columns",
      group: "editing",
    },
    cut: {
      fn: SheetActions.cut.bind(SheetActions),
      name: "Cut",
      group: "editing",
    },
    clear: {
      fn: SheetActions.clear.bind(SheetActions),
      name: "Clear",
      group: "editing",
    },
    changeCell: {
      fn: SheetActions.changeCell.bind(SheetActions),
      name: "Change cell",
      group: "editing",
    },
    moveCursorToCellLineEnd: {
      fn: SheetActions.moveCursorToCellLineEnd.bind(SheetActions),
      name: "Move cursor to line end",
      group: "editing",
      // This is hidden because this is an insert-mode binding, and that concept isn't yet exposed
      // to the user or handled by the UI.
      hiddenFromHelp: true,
    },
    copyRowOrSelection: {
      fn: SheetActions.copyRowOrSelection.bind(SheetActions),
      name: "Copy row, or selected cells",
      group: "editing",
    },
    // "Yank cell"
    copy: {
      fn: SheetActions.copy.bind(SheetActions),
      name: "Copy cells",
      group: "editing",
    },
    paste: {
      fn: SheetActions.paste.bind(SheetActions),
      name: "Paste",
      group: "editing",
    },
    exitMode: {
      fn: SheetActions.exitMode.bind(SheetActions),
      name: "Exit the current mode",
      group: "editing",
    },

    // Merging cells
    mergeAllCells: {
      fn: SheetActions.mergeAllCells.bind(SheetActions),
      name: "Merge all cells",
      group: "editing",
    },
    mergeCellsHorizontally: {
      fn: SheetActions.mergeCellsHorizontally.bind(SheetActions),
      name: "Merge cells horizontally",
      group: "editing",
    },
    mergeCellsVertically: {
      fn: SheetActions.mergeCellsVertically.bind(SheetActions),
      name: "Merge cells vertically",
      group: "editing",
    },
    unmergeCells: {
      fn: SheetActions.unmergeCells.bind(SheetActions),
      name: "Unmerge cells",
      group: "editing",
    },

    // Selection
    enterVisualMode: {
      fn: SheetActions.enterVisualMode.bind(SheetActions),
      name: "Begin selecting cells",
      group: "selection",
    },
    enterVisualRowMode: {
      fn: SheetActions.enterVisualRowMode.bind(SheetActions),
      name: "Begin selecting rows",
      group: "selection",
    },
    enterVisualColumnMode: {
      fn: SheetActions.enterVisualColumnMode.bind(SheetActions),
      name: "Begin selecting columns",
      group: "selection",
    },

    // Scrolling
    scrollHalfPageDown: {
      fn: SheetActions.scrollHalfPageDown.bind(SheetActions),
      name: "Scroll half page down",
      group: "movement",
    },
    scrollHalfPageUp: {
      fn: SheetActions.scrollHalfPageUp.bind(SheetActions),
      name: "Scroll half page up",
      group: "movement",
    },
    scrollToTop: {
      fn: SheetActions.scrollToTop.bind(SheetActions),
      name: "Scroll to top",
      group: "movement",
    },
    scrollToBottom: {
      fn: SheetActions.scrollToBottom.bind(SheetActions),
      name: "Scroll to bottom",
      group: "movement",
    },

    // Tabs
    moveTabRight: {
      fn: SheetActions.moveTabRight.bind(SheetActions),
      name: "Move tab right",
      group: "tabs",
    },
    moveTabLeft: {
      fn: SheetActions.moveTabLeft.bind(SheetActions),
      name: "Move tab left",
      group: "tabs",
    },
    nextTab: {
      fn: SheetActions.nextTab.bind(SheetActions),
      name: "Next tab",
      group: "tabs",
    },
    prevTab: {
      fn: SheetActions.prevTab.bind(SheetActions),
      name: "Previous tab",
      group: "tabs",
    },

    // Formatting
    alignLeft: {
      fn: SheetActions.alignLeft.bind(SheetActions),
      name: "Align left",
      group: "formatting",
    },
    alignCenter: {
      fn: SheetActions.alignCenter.bind(SheetActions),
      name: "Align center",
      group: "formatting",
    },
    alignRight: {
      fn: SheetActions.alignRight.bind(SheetActions),
      name: "Align right",
      group: "formatting",
    },
    wrap: {
      fn: SheetActions.wrap.bind(SheetActions),
      name: "Wrap cell",
      group: "formatting",
    },
    overflow: {
      fn: SheetActions.overflow.bind(SheetActions),
      name: "Overflow cell",
      group: "formatting",
    },
    clip: {
      fn: SheetActions.clip.bind(SheetActions),
      name: "Clip cell",
      group: "formatting",
    },
    colorCellWhite: {
      fn: SheetActions.colorCellWhite.bind(SheetActions),
      name: "Color background white",
      group: "formatting",
      hiddenFromHelp: true,
    },
    colorCellLightYellow3: {
      fn: SheetActions.colorCellLightYellow3.bind(SheetActions),
      name: "Color background light yellow 3",
      group: "formatting",
      hiddenFromHelp: true,
    },
    colorCellLightCornflowerBlue3: {
      fn: SheetActions.colorCellLightCornflowerBlue3.bind(SheetActions),
      name: "Color cell light corn flower blue 3",
      group: "formatting",
      hiddenFromHelp: true,
    },
    colorCellLightPurple: {
      fn: SheetActions.colorCellLightPurple.bind(SheetActions),
      name: "Color cell light purple",
      group: "formatting",
      hiddenFromHelp: true,
    },
    colorCellLightRed3: {
      fn: SheetActions.colorCellLightRed3.bind(SheetActions),
      name: "Color cell light red 3",
      group: "formatting",
      hiddenFromHelp: true,
    },
    colorCellLightGray2: {
      fn: SheetActions.colorCellLightGray2.bind(SheetActions),
      name: "Color cell light gray 2",
      group: "formatting",
      hiddenFromHelp: true,
    },
    fontSizeNormal: {
      fn: SheetActions.setFontSize10.bind(SheetActions),
      name: "Set font size to normal",
      group: "formatting",
    },
    fontSizeLarge: {
      fn: SheetActions.setFontSize12.bind(SheetActions),
      name: "Set font size to large",
      group: "formatting",
    },
    fontSizeSmall: {
      fn: SheetActions.setFontSize8.bind(SheetActions),
      name: "Set font size to small",
      group: "formatting",
    },
    freezeRow: {
      fn: SheetActions.freezeRow.bind(SheetActions),
      name: "Freeze row",
      group: "formatting",
    },
    freezeColumn: {
      fn: SheetActions.freezeColumn.bind(SheetActions),
      name: "Freeze column",
      group: "formatting",
    },

    // Misc
    showHelp: {
      fn: SheetActions.showHelpDialog,
      name: "Show help",
      group: "other",
    },
    toggleFullScreen: {
      fn: SheetActions.toggleFullScreen.bind(SheetActions),
      name: "Toggle full screen",
      group: "other",
    },
    openCellAsUrl: {
      fn: SheetActions.openCellAsUrl.bind(SheetActions),
      name: "Open URL in cell in a new tab",
      group: "other",
    },
    reloadPage: {
      fn: SheetActions.reloadPage.bind(SheetActions),
      name: "Reload page",
      group: "other",
    },
  },

  defaultMappings: {
    "normal": {
      // Cursor movement
      "moveUp": "k",
      "moveDown": "j",
      "moveLeft": "h",
      "moveRight": "l",
      "moveBack": "b",
      // "moveBackTwice": "B",
      "moveForwardToNext": "w",
      "moveForwardToEnd": "e",
			"goToFirstColumn": "0",
			// "moveRight": "0",

      // Row & column movement
      "moveRowsDown": "<C-J>",
      "moveRowsUp": "<C-K>",
      "moveColumnsLeft": "<C-H>",
      "moveColumnsRight": "<C-L>",

      // Editing
      "editCell": "i",
      "substituteCell": "s",
      "editCellAppend": "a",
      "undo": "u",
      "redo": "<C-r>",
      "replaceChar": "r",
      "openRowBelow": "o",
      "openRowAbove": "O",
      "deleteRowsOrColumns": "d•d",
      "cut": "x",
      "changeCell": "c•c",
      "copyRowOrSelection": "y•y",

      // Merging cells
      "mergeAllCells": ";•m•a",
      "unmergeCells": ";•m•u",
      "mergeCellsHorizontally": ";•m•h",
      "mergeCellsVertically": ";•m•v",

      // "Yank cell"
      "copy": "y•c",
      "paste": "p",

      // Selection
      "enterVisualMode": "v",
      "enterVisualRowMode": "V",
      "enterVisualColumnMode": "<A-v>",

      // Scrolling
      "scrollHalfPageDown": "<C-d>",
      "scrollHalfPageUp": "<C-u>",
      "scrollToTop": "g•g",
      "scrollToBottom": "G",

      // Tabs
      "moveTabRight": ">•>",
      "moveTabLeft": "<•<",
      // "nextTab": "g•t",
      // "prevTab": "g•T",
      "prevTab": "J",
      "nextTab": "K",

      // Formatting
      "wrap": ";•w•w",
      "overflow": ";•w•o",
      "clip": ";•w•c",
      "alignLeft": ";•a•l",
      "alignCenter": ";•a•c",
      "alignRight": ";•a•r",
      "colorCellWhite": ";•c•w",
      "colorCellLightYellow3": ";•c•y",
      "colorCellLightCornflowerBlue3": ";•c•b",
      "colorCellLightPurple": ";•c•p",
      "colorCellLightRed3": ";•c•r",
      "colorCellLightGray2": ";•c•g",
      "fontSizeNormal": ";•f•n",
      "fontSizeLarge": ";•f•l",
      "fontSizeSmall": ";•f•s",
      "freezeRow": ";•f•r",
      "freezeColumn": ";•f•c",

      // Misc
      "showHelp": "?",
      "toggleFullScreen": ";•w•f", // Mnemonic for "window full screen"
      "openCellAsUrl": ";•o",
      // For some reason Cmd-r, which normally reloads the page, is disabled by Sheets.
      "reloadPage": "<M-r>",
      // Don't pass through ESC to the page in normal mode. If you hit ESC in normal mode, nothing
      // should happen. If we pass this through to Sheets, Sheets will exit full screen mode if it's
      // activated.
      "exitMode": "esc",
    },

    // NOTE(philc): Currently we only let the user bind mappings for normal mode commands. So, if
    // the user binds a mapping for a normal mode command which is also available in insert mode
    // (like "exitMode"), then the mapping from normal mode will be used, even in insert mode.
    "insert": {
      // In normal Sheets, esc takes you out of the cell and loses your edits. That's a poor
      // experience for people used to Vim. Now ESC will save your cell edits and put you back in
      // normal mode.
      "exitMode": "esc",
      // "exitMode": "j•k",
      // In form fields on Mac, C-e takes you to the end of the field. For some reason C-e doesn't
      // work in Sheets. Here, we fix that.
      "moveCursorToCellLineEnd": "<C-e>",
      "reloadPage": "<M-r>",
    },
  },
};

window.Commands = Commands;
