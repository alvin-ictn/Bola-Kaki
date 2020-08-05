import '../component/scoreTable';
import '../component/teamInfo';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import DataSource from '../data/data-source.js';
import '../component/main-container';
 

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