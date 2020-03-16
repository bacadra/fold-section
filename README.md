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

## See bacadra packages for Atom IDE

* [bacadra-atom](https://github.com/bacadra/bacadra-atom) general method to co-work with python bacadra package
* [bacadra-fold](https://github.com/bacadra/bacadra-fold) fold custom sections in various grammars files
* [bacadra-hydrogen](https://github.com/bacadra/bacadra-hydrogen) additional method to compute with hydrogen atom package
* [bacadra-outline](https://github.com/bacadra/bacadra-outline) outline document by custom marks
* [bacadra-word-map](https://github.com/bacadra/bacadra-word-map) easy way to fast convert fixed-length word's, e.g. input greek letters
