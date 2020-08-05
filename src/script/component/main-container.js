import './scoreTable.js';
import './teamInfo.js';

class AppArea extends HTMLElement {
  constructor() {
    super();
  }

  set content(content) {
    this._content = content;
    this.render();
  }

  render() {
    this.innerHTML = '';
    const contentElement = document.createElement(`${this._content}`);
    this.appendChild(contentElement);
  }
}

customElements.define('app-area', AppArea);
