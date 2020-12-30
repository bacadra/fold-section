'use babel';

const {AbstractModel} = require('./abstract-model');

const RE_GHEAD = /^[^#\n]*#(?:\${1,9}[spv]?|a)#.*/i

const RE_LHEAD = [
  /^([^#\n]*)#a#(.*)/i,
  /^([^#\n]*)#\${1}([spv]?)#(.*)/i,
  /^([^#\n]*)#\${2}([spv]?)#(.*)/i,
  /^([^#\n]*)#\${3}([spv]?)#(.*)/i,
  /^([^#\n]*)#\${4}([spv]?)#(.*)/i,
  /^([^#\n]*)#\${5}([spv]?)#(.*)/i,
  /^([^#\n]*)#\${6}([spv]?)#(.*)/i,
  /^([^#\n]*)#\${7}([spv]?)#(.*)/i,
  /^([^#\n]*)#\${8}([spv]?)#(.*)/i,
  /^([^#\n]*)#\${9}([spv]?)#(.*)/i,
]

class PythonModel extends AbstractModel {

  constructor(editor) {super(editor, RE_GHEAD, RE_LHEAD)}

  checkText (LVL, lineText) {

    if (this.RE_LHEAD[0].exec(lineText)) {
      let subre = /\( *(\d+) *, *[rf]*['\"](.*?)['\"]/.exec(lineText)
      if (!subre) {return}
      let lvl = parseInt(subre[1])
      if (!lvl || lvl > this.maxDepth || lvl<1 || lvl>9) {return false}
      return lvl
    }

    if (LVL===true) {
      re = this.RE_GHEAD
    } else {
      re = this.RE_LHEAD[LVL+1]
    }

    if (re.test(lineText)) {
      if (LVL===true) {
        for (let lvl = 1; lvl < this.RE_LHEAD.length; lvl++) {
          re = this.RE_LHEAD[lvl]
          if (re.test(lineText)) {
            return lvl-1
          }
        }
      } else {
        return LVL+1
      }
    }
    return false
  }

}

export default {PythonModel}
