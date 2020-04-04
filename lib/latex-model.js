const reHead = [
  /^ *\%\$ [_ ]*([^\%\n]*)(?<!_)/,
  /^ *\%\$\$ [_ ]*([^\%\n]*)(?<!_)/,
  /^ *\%\$\$\$ [_ ]*([^\%\n]*)(?<!_)/,
  /^ *\%\$\$\$\$ [_ ]*([^\%\n]*)(?<!_)/,
  /^ *\%\$\$\$\$\$ [_ ]*([^\%\n]*)(?<!_)/,
  /^[^\%\n]*(?:\\part\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\chapter\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\section|frametitle\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\subsection|framesubtitle\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\subsubsection\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\paragraph\*?)(?:\[.*\])?{([^}]*)/,
  /^[^\%\n]*(?:\\subparagraph\*?)(?:\[.*\])?{([^}]*)/,
]

module.exports = {reHead}