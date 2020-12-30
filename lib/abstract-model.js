'use babel';

class AbstractModel {

  constructor(editor, RE_GHEAD, RE_LHEAD) {
    this.editor   = editor
    this.RE_GHEAD = RE_GHEAD
    this.RE_LHEAD = RE_LHEAD
  }


  checkText (LVL, lineText) {
    if (LVL===true) {
      re = this.RE_GHEAD
    } else {
      re = this.RE_LHEAD[LVL]
    }

    if (re.test(lineText)) {
      if (LVL===true) {
        for (let lvl = 0; lvl < this.RE_LHEAD.length; lvl++) {
          re = this.RE_LHEAD[lvl]
          if (re.test(lineText)) {
            return lvl
          }
        }
      } else {
        return LVL
      }
    }
    return false
  }


  foldSection(LVL=true) {
    currPos = this.editor.getCursorBufferPosition()
    currRow = currPos.row
    lastRow = this.editor.getLastBufferRow()
    if (this.RE_LHEAD == null) {return}
    if (LVL>this.RE_LHEAD.length) {return}

    let startRow, endRow

    for (let i = currRow; i >= 0; i--) {
      lineText = this.editor.lineTextForBufferRow(i)

      lvl = this.checkText(LVL, lineText)

      if (lvl!==false) {
          startRow = i;
          lvlHead  = lvl;
          break
      }
    }

    if (lvl===false) {return}

    if (!startRow) return

    for (let i = currRow+1; i <= lastRow; i++) {
      lineText = this.editor.lineTextForBufferRow(i)

      lve = this.checkText(true, lineText)

      if (lve!==false && lve<=lvl) {
        endRow = i;
        break
      }
    }

    if (!endRow) {endRow = lastRow} else {endRow=endRow-1}

    this.foldRows(startRow, endRow)

    this.editor.setCursorBufferPosition(currPos)
  }


  foldRows(startRow, endRow) {
    this.editor.setSelectedBufferRange(
      [[startRow, 1e10], [endRow, 1e10]]
    )
    this.editor.foldSelectedLines()
  }


  toggleSection() {
    const currentRow = this.editor.getCursorBufferPosition().row
    if (this.editor.isFoldedAtBufferRow(currentRow)){
      this.unfold()
    } else {
      this.foldSection()
    }
  }


  foldSections(LVL) {
    this.unfoldAll()

    currPos = this.editor.getCursorBufferPosition()
    lastRow = this.editor.getLastBufferRow()

    if (this.RE_LHEAD == null) {return}
    if (LVL>this.RE_LHEAD.length) {return}

    LVL = LVL-1

    for (let i = 0; i <= lastRow; i++) {

      lineText = this.editor.lineTextForBufferRow(i)

      lvl = this.checkText(LVL, lineText)

      if (lvl===false) {continue}

      startRow = i

      i++;

      for (let j = 0; i <= lastRow; i++) {

        lineText = this.editor.lineTextForBufferRow(i)

        lvl = this.checkText(true, lineText)

        if ((lvl!==false && lvl<=LVL)|| i==lastRow) {
          endRow = i;
          if (i==lastRow) {endRow++}

          this.foldRows(startRow, endRow-1)
          i--;
          break
        }
      }
    }

    this.editor.setCursorBufferPosition(currPos)
  }


  foldTOC() {
    this.unfoldAll()

    currPos  = this.editor.getCursorBufferPosition()
    lastRow = this.editor.getLastBufferRow()

    if (this.RE_LHEAD == null) {return}

    let startRow = -1

    for (let i = startRow+1; i <= lastRow; i++) {
      lineText = this.editor.lineTextForBufferRow(i)
      lvl = this.checkText(true, lineText)

      if (lvl===false && i!==lastRow) {continue}

      if (i==lastRow) {i++}

      this.foldRows(startRow, i-1)
      startRow = i
    }

    this.editor.setCursorBufferPosition(currPos)
  }


  unfold () {
    const currentRow = this.editor.getCursorBufferPosition().row
    this.editor.unfoldBufferRow(currentRow)
    this.editor.scrollToCursorPosition()
  }


  unfoldAll() {
    let lrow = this.editor.getLastBufferRow()
    for (let row = 0; row < lrow; row++) {
      this.editor.unfoldBufferRow(row)
    }
    this.editor.scrollToCursorPosition()
  }

}

export default {AbstractModel}
