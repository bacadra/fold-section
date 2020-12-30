'use babel';

const {AbstractModel} = require('./abstract-model');

const RE_GHEAD = /(^ *#{1,9} )/i

const RE_LHEAD = [
  /^ *#{1} /,
  /^ *#{2} /,
  /^ *#{3} /,
  /^ *#{4} /,
  /^ *#{5} /,
  /^ *#{6} /,
  /^ *#{7} /,
  /^ *#{8} /,
  /^ *#{9} /,
]

class MarkdownModel extends AbstractModel {

  constructor(editor) {super(editor, RE_GHEAD, RE_LHEAD)}

}

export default {MarkdownModel}
