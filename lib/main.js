'use babel';

import { CompositeDisposable } from 'atom';

import {PythonModel    } from './python-model'
import {SOFiSTiKModel  } from './sofistik-model'
import {LaTeXModel     } from './latex-model'
import {BacadraLogModel} from './bacadra-log-model'
import {BiBTeXModel    } from './bibtex-model'
import {MarkdownModel  } from './markdown-model'

const MODEL_CLASS_SCOPES = {
  'python'               : PythonModel,
  'source.python'        : PythonModel,
  'source.cython'        : PythonModel,
  'source.sofi'          : SOFiSTiKModel,
  'text.tex.latex'       : LaTeXModel,
  'text.blg'             : BacadraLogModel,
  'text.bibtex'          : BiBTeXModel,
  'text.md'              : MarkdownModel,
}

const SUPPORTED_SCOPES = Object.keys(MODEL_CLASS_SCOPES);

export default {

  activate () {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'fold-section:fold'       : () => this.foldSection(true),

      'fold-section:fold-1'     : () => this.foldSection(1),
      'fold-section:fold-2'     : () => this.foldSection(2),
      'fold-section:fold-3'     : () => this.foldSection(3),
      'fold-section:fold-4'     : () => this.foldSection(4),
      'fold-section:fold-5'     : () => this.foldSection(5),
      'fold-section:fold-6'     : () => this.foldSection(6),
      'fold-section:fold-7'     : () => this.foldSection(7),
      'fold-section:fold-8'     : () => this.foldSection(8),
      'fold-section:fold-9'     : () => this.foldSection(9),

      'fold-section:fold-all-1' : () => this.foldSections(1),
      'fold-section:fold-all-2' : () => this.foldSections(2),
      'fold-section:fold-all-3' : () => this.foldSections(3),
      'fold-section:fold-all-4' : () => this.foldSections(4),
      'fold-section:fold-all-5' : () => this.foldSections(5),
      'fold-section:fold-all-6' : () => this.foldSections(6),
      'fold-section:fold-all-7' : () => this.foldSections(7),
      'fold-section:fold-all-8' : () => this.foldSections(8),
      'fold-section:fold-all-9' : () => this.foldSections(9),

      'fold-section:fold-TOC'   : () => this.foldTOC(),

      'fold-section:toggle'     : () => this.toggleSection(),

      'fold-section:unfold'     : () => this.unfold(),
      'fold-section:unfold-all' : () => this.unfoldAll(),
    }));

  },

  deactivate() {
    this.subscriptions.dispose();
  },


  getModel () {
    const editor = atom.workspace.getActiveTextEditor()
    scopeDescriptors = editor.getRootScopeDescriptor().scopes

    for (let scope of scopeDescriptors) {
      if (SUPPORTED_SCOPES.includes(scope)) {
        return new MODEL_CLASS_SCOPES[scope](editor);
      }
    }
    return false;
  },


  foldSection (LVL) {
    model=this.getModel() ; if (!model) {return} ; model.foldSection(LVL)},

  toggleSection () {
    model=this.getModel() ; if (!model) {return} ; model.toggleSection()},

  unfold () {
    model=this.getModel() ; if (!model) {return} ; model.unfold()},

  unfoldAll () {
    model=this.getModel() ; if (!model) {return} ; model.unfoldAll()},

  foldSections (LVL) {
    model=this.getModel() ; if (!model) {return} ; model.foldSections(LVL)},

  foldTOC () {
    model=this.getModel() ; if (!model) {return} ; model.foldTOC()},

}
