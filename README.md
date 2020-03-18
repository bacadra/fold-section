# bacadra-fold

It fold, unfold or toggle sections following the headers markers. The special future is to collapse all section to create view like table of content.

## Built-in grammatics

The levels are defined by regular expresions. The followed grammatic have built-in style with proper regex:

* Python:
  * 1: `^ *#\$ |^(?! *#).*#\$#`
  * 2: `^ *#\$\$ |^(?! *#).*#\$\$#`
  * 3: `^ *#\$\$\$ |^(?! *#).*#\$\$\$#`
  * 4: `^ *#\$\$\$\$ |^(?! *#).*#\$\$\$\$#`
  * 5: `^ *#\$\$\$\$\$ |^(?! *#).*#\$\$\$\$\$#`
  * 6: `^ *#\$\$\$\$\$\$ |^(?! *#).*#\$\$\$\$\$#`
  * 7: `^ *#\$\$\$\$\$\$\$ |^(?! *#).*#\$\$\$\$\$\$#`
  * 8: `^ *#\$\$\$\$\$\$\$\$ |^(?! *#).*#\$\$\$\$\$\$\$#`
  * 9: `^ *#\$\$\$\$\$\$\$\$\$ |^(?! *#).*#\$\$\$\$\$\$\$\$#`
  * e.g.: `#$$ comment`
  * e.g.: `print('somethink') #\$#`
* Markdown:
  * 1: `^ *# +`
  * 2: `^ *## +`
  * 3: `^ *### +`
  * 4: `^ *#### +`
  * 5: `^ *##### +`
  * 6: `^ *###### +`
  * 7: `^ *####### +`
  * 8: `^ *######## +`
  * 9: `^ *######### +`
  * e.g.: `# heading 1`
  * e.g.: `## heading 21`
* SOFiSTiK:
  * 1: `^ *!\$ `
  * 2: `^ *!\$\$ `
  * 3: `^ *!\$\$\$ `
  * 4: `^ *!\$\$\$\$ `
  * 5: `^ *!\$\$\$\$\$ `
  * 6: `^ *!\$\$\$\$\$\$ `
  * 7: `^!.!chapter /`
  * 8: `^ *.?prog/`
  * 9: `!.!`

## See another...

* [bacadra-atom](https://github.com/bacadra/bacadra-atom)
* [bacadra-bib](https://github.com/bacadra/bacadra-bib)
* [bacadra-fold](https://github.com/bacadra/bacadra-fold)
* [bacadra-hydrogen](https://github.com/bacadra/bacadra-hydrogen)
* [bacadra-outline](https://github.com/bacadra/bacadra-outline)
* [bacadra-word-map](https://github.com/bacadra/bacadra-word-map)
* [language-bacadra](https://github.com/bacadra/language-bacadra)
* [language-sofistik](https://github.com/bacadra/language-sofistik)
* [sofistik-atom](https://github.com/bacadra/sofistik-atom)
