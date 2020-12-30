# fold-section

It fold, unfold or toggle sections following the headers markers. The special future is to collapse all section to create view like table of content.

## Built-in grammatics

The levels are defined by regular expresions. The followed grammatic have built-in style with proper regex:

* Python:
  * 1: `^ *#\$ |^(?! *#).*#\$[sSpP]?#`
  * 2: `^ *#\$\$ |^(?! *#).*#\$\$[sSpP]?#`
  * 3: `^ *#\$\$\$ |^(?! *#).*#\$\$\$[sSpP]?#`
  * 4: `^ *#\$\$\$\$ |^(?! *#).*#\$\$\$\$[sSpP]?#`
  * 5: `^ *#\$\$\$\$\$ |^(?! *#).*#\$\$\$\$\$[sSpP]?#`
  * 6: `^ *#\$\$\$\$\$\$ |^(?! *#).*#\$\$\$\$\$[sSpP]?#`
  * 7: `^ *#\$\$\$\$\$\$\$ |^(?! *#).*#\$\$\$\$\$\$[sSpP]?#`
  * 8: `^ *#\$\$\$\$\$\$\$\$ |^(?! *#).*#\$\$\$\$\$\$\$[sSpP]?#`
  * 9: `^ *#\$\$\$\$\$\$\$\$\$ |^(?! *#).*#\$\$\$\$\$\$\$\$[sSpP]?#`
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

## See my another packages...

* [bacadra-atom](https://github.com/bacadra/bacadra-atom)
* [bib-finder](https://github.com/bacadra/bib-finder)
* [fold-section](https://github.com/bacadra/fold-section)
* [hydrogen-run](https://github.com/bacadra/hydrogen-run)
* [image-paste](https://github.com/bacadra/image-paste)
* [language-bacadra](https://github.com/bacadra/language-bacadra)
* [language-sofistik](https://github.com/bacadra/language-sofistik)
* [navigation-pane](https://github.com/bacadra/navigation-pane)
* [sofistik-atom](https://github.com/bacadra/sofistik-atom)
* [word-map](https://github.com/bacadra/word-map)
