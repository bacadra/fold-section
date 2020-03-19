'use babel';

import { CompositeDisposable } from 'atom';

let subscriptions

export default {

  activate(state) {
    subscriptions = new CompositeDisposable();

    subscriptions.add(atom.commands.add('atom-text-editor', {
      'fold-section:fold-current-lvl': () => this.foldLvl(true),
      'fold-section:unfold-current-lvl': () => this.unfoldCurrent(),
      'fold-section:toggle-current-lvl': () => this.toggleCurrentLvl(),
      'fold-section:fold-TOC': () => this.foldTOC(),
      'fold-section:unfold-all': () => this.unfoldAll(),
      'fold-section:fold-all-lvl-1': () => this.foldAllLvl(1),
      'fold-section:fold-all-lvl-2': () => this.foldAllLvl(2),
      'fold-section:fold-all-lvl-3': () => this.foldAllLvl(3),
      'fold-section:fold-all-lvl-4': () => this.foldAllLvl(4),
      'fold-section:fold-all-lvl-5': () => this.foldAllLvl(5),
      'fold-section:fold-all-lvl-6': () => this.foldAllLvl(6),
      'fold-section:fold-all-lvl-7': () => this.foldAllLvl(7),
      'fold-section:fold-all-lvl-8': () => this.foldAllLvl(8),
      'fold-section:fold-all-lvl-9': () => this.foldAllLvl(9),
      'fold-section:fold-lvl-1': () => this.foldLvl(1),
      'fold-section:fold-lvl-2': () => this.foldLvl(2),
      'fold-section:fold-lvl-3': () => this.foldLvl(3),
      'fold-section:fold-lvl-4': () => this.foldLvl(4),
      'fold-section:fold-lvl-5': () => this.foldLvl(5),
      'fold-section:fold-lvl-6': () => this.foldLvl(6),
      'fold-section:fold-lvl-7': () => this.foldLvl(7),
      'fold-section:fold-lvl-8': () => this.foldLvl(8),
      'fold-section:fold-lvl-9': () => this.foldLvl(9),
    }));
  },

  deactivate() {
    subscriptions.dispose();
  },

  getReHead() {
    const editor = atom.workspace.getActiveTextEditor()
    scopeName = editor.getRootScopeDescriptor().scopes[0]

    if (['source.python'].includes(scopeName)) {
      var {reHead} = require('./python-model');

    } else if (['text.md'].includes(scopeName)) {
      var {reHead} = require('./mkdown-model');

    } else if (['source.sofi'].includes(scopeName)) {
      var {reHead} = require('./sofistik-model');

    } else {
      atom.notifications.addError('Grammar "'+scopeName+'" not supported')
      return
    }

    return reHead
  },

  foldLvl(lvlFold=true) {

    const editor = atom.workspace.getActiveTextEditor()

    currPos  = editor.getCursorBufferPosition()
    currRow = currPos.row
    lastRow = editor.getLastBufferRow()

    reHead = this.getReHead()
    if (reHead == null) {return}
    if (lvlFold>reHead.length) {return}

    // empty start row variable
    let startRow, endRow, lvlHead

    if (lvlFold===true) {

      // look for start line
      for (let i = currRow; i >= 0; i--) {
        lineText = editor.lineTextForBufferRow(i)

        for (let lvl = 0; lvl < reHead.length; lvl++) {
          re = reHead[lvl]


          if (re.test(lineText)) {
            startRow = i;
            lvlHead  = lvl;
            break
          }
        }

        if (startRow>=0) {break}

      }

    } else {
      lvlFold = lvlFold-1

      exitQ = false

      // look for start line
      for (let i = currRow; i >= 0; i--) {
        lineText = editor.lineTextForBufferRow(i)

        for (let lvl = 0; lvl <= lvlFold; lvl++) {
          re = reHead[lvl]

          if (re.test(lineText)) {
            if (lvl!=lvlFold) {
              exitQ = true
              break
            }
            startRow = i;
            lvlHead  = lvl;
            break
          }
        }

        if (startRow>=0 || exitQ==true) {break}

      }

    }

    if (startRow==null) return

    // look for end line
    for (let i = currRow+1; i <= lastRow; i++) {
      lineText = editor.lineTextForBufferRow(i)


      for (let lvl = 0; lvl <= lvlHead; lvl++) {
        re = reHead[lvl]

        if (re.test(lineText)) {
          endRow = i;
          break
        }
      }

      if (endRow>=0) {break}
    }

    if (!endRow) {endRow = lastRow} else {endRow=endRow-1}

    this.foldRange(startRow, endRow)

    editor.setCursorBufferPosition(currPos)
  },


  foldRange(startRow, endRow) {
    const editor = atom.workspace.getActiveTextEditor()
    editor.setSelectedBufferRange(
      [[startRow, 1e10], [endRow, 1e10]]
    )
    editor.foldSelectedLines()
  },

  unfoldCurrent () {
    const editor = atom.workspace.getActiveTextEditor()
    const currentRow = editor.getCursorBufferPosition().row
    editor.unfoldBufferRow(currentRow)
    editor.scrollToCursorPosition()
  },

  toggleCurrentLvl() {
    const editor = atom.workspace.getActiveTextEditor()
    const currentRow = editor.getCursorBufferPosition().row
    if (editor.isFoldedAtBufferRow(currentRow)){
      this.unfoldCurrent()
    } else {
      this.foldLvl()
    }
  },

  unfoldAll() {
    const editor = atom.workspace.getActiveTextEditor()
    let lrow = editor.getLastBufferRow()
    for (let row = 0; row < lrow; row++) {
      editor.unfoldBufferRow(row)
    }
    editor.scrollToCursorPosition()
  },

  foldAllLvl(lvlFold) {
    this.unfoldAll()

    const editor = atom.workspace.getActiveTextEditor()

    currPos = editor.getCursorBufferPosition()
    lastRow = editor.getLastBufferRow()

    reHead = this.getReHead()
    if (reHead == null) {return}
    if (lvlFold>reHead.length) {return}

    lvlFold = lvlFold-1

    for (let i = 0; i <= lastRow; i++) {

      lineText = editor.lineTextForBufferRow(i)

      re = reHead[lvlFold]

      if (re.test(lineText)) {

        startRow = i

        exitQ = false

        i++;

        for (let j = 0; i <= lastRow; i++) {

          lineText = editor.lineTextForBufferRow(i)

          for (let lvl = 0; lvl <= lvlFold; lvl++) {
            re = reHead[lvl]

            if (re.test(lineText) || i==lastRow) {
              endRow = i;
              if (i==lastRow) {endRow++}

              this.foldRange(startRow, endRow-1)
              exitQ = true
              i--;
              break
            }
          }
          if (exitQ==true) {break}
        }

      }

    }

    editor.setCursorBufferPosition(currPos)
  },


  foldTOC() {
    this.unfoldAll()

    const editor = atom.workspace.getActiveTextEditor()

    currPos  = editor.getCursorBufferPosition()
    lastRow = editor.getLastBufferRow()

    reHead = this.getReHead()
    if (reHead == null) {return}

    let startRow = -1

    for (let i = startRow+1; i <= lastRow; i++) {
      lineText = editor.lineTextForBufferRow(i)
      for (let lvl = 0; lvl < reHead.length; lvl++) {
        re = reHead[lvl]
        if (re.test(lineText)) {
          this.foldRange(startRow, i-1)
          startRow = i
          break
        } else if (i==lastRow) {
          this.foldRange(startRow, i)
          break
        }
      }
    }

    editor.setCursorBufferPosition(currPos)
  },
};
