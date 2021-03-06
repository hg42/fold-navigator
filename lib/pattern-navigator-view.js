'use babel';

export default class NavigatorView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('pattern-navigator');
    this.activeFold = null;
  }

  getElement() {
    return this.element;
  }

  setContent(html) {
    this.element.innerHTML = html;
  }

  clearContent() {
    this.element.innerHTML = "";
    this.activeFold = null;
  }

  unselectLine(id) {
    var line = document.getElementById(id);
    if (!line)
      return;

    line.className = line.className.replace(/(?:^|\s)pattern-navigator-item-selected(?!\S)/g, '');
  }

  // apply classes to the line in navigator which represents the active fold
  selectFold(fold) {

    /* sometimes at the beginnings of files and end of files first line fold = 0
    this function gets called lot's of time because onDidChangeCursorPosition fires several time if call code editor.foldAll();
    */
    if (this.activeFold === fold || (!fold && fold !== 0) ) {
      return;
    }

    var line = document.getElementById('pattern-navigator-item-' + fold);

    if (!line)
      return false;

    if (this.activeFold || this.activeFold === 0) {
      this.unselectLine('pattern-navigator-item-' + this.activeFold);
    }

    line.className += " pattern-navigator-item-selected";
    this.activeFold = fold;
    return line;
  }

  getActiveFold() {
    return this.activeFold;
  }

  serialize() {
    // Returns an object that can be retrieved when package is activated ??? I don't know what this is for :)
  }

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

}
