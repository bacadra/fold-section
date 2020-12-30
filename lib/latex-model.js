'use babel';

const {AbstractModel} = require('./abstract-model');

const RE_GHEAD = /(?:([^%\n]*)%\${1,5}%(.*)|^[^\%\n]*(?:\\part\*?|\\chapter\*?|\\section|frametitle\*?|\\subsection|framesubtitle\*?|\\subsubsection\*?|\\paragraph\*?|\\subparagraph\*?)(?:\[.*\])?{([^}]*))/i

const RE_LHEAD = [
  /([^%\n]*)%\${1}%(.*)/i,
  /([^%\n]*)%\${2}%(.*)/i,
  /([^%\n]*)%\${3}%(.*)/i,
  /([^%\n]*)%\${4}%(.*)/i,
  /([^%\n]*)%\${5}%(.*)/i,
  /^[^\%\n]*(?:\\part\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\chapter\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\section|frametitle\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\subsection|framesubtitle\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\subsubsection\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\paragraph\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\subparagraph\*?)(?:\[.*\])?{([^}]*)/,
]

class LaTeXModel extends AbstractModel {

  constructor(editor) {super(editor, RE_GHEAD, RE_LHEAD)}

}

export default {LaTeXModel}
