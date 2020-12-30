'use babel';

const {AbstractModel} = require('./abstract-model');

const RE_GHEAD = /(?:(\[.+?\]\[.+?\]\[.+?\]))/i

const RE_LHEAD = [
  /(\[.+?\]\[.+?\]\[.+?\])/i,
]

class BacadraLogModel extends AbstractModel {

  constructor(editor) {super(editor, RE_GHEAD, RE_LHEAD)}

}

export default {BacadraLogModel}
