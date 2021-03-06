'use babel';

const {AbstractModel} = require('./abstract-model');

const RE_GHEAD = /(?:([^!\n]*)!\${1,5}!(.*)|^(!.!chapter) +=*([^=\n]*)|^ *(.?prog +[^ \n]*)(?:.*\nhead +(.+))?|(!.! +.*))/i

const RE_LHEAD = [
  /([^!\n]*)!\${1}!(.*)/i,
  /([^!\n]*)!\${2}!(.*)/i,
  /([^!\n]*)!\${3}!(.*)/i,
  /([^!\n]*)!\${4}!(.*)/i,
  /([^!\n]*)!\${5}!(.*)/i,
  /^(!.!chapter) +=*([^=\n]*)/i,
  /^ *(.?prog +[^ \n]*)(?:.*\nhead +(.+))?/i,
  /(!.! +.*)/,
]

class SOFiSTiKModel extends AbstractModel {

  constructor(editor) {super(editor, RE_GHEAD, RE_LHEAD)}

}

export default {SOFiSTiKModel}
