const reHead = [
  /([^%\n]*)%\${1}%.*/i,
  /([^%\n]*)%\${2}%.*/i,
  /([^%\n]*)%\${3}%.*/i,
  /([^%\n]*)%\${4}%.*/i,
  /([^%\n]*)%\${5}%.*/i,
  /^[ ]*\@.*/,
];

module.exports = {reHead}