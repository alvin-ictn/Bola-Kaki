import '../component/scoreTable';
import '../component/teamInfo';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {URL,years} from '../data/config';
import DataSource from '../data/data-source.js';


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
    try{
      var site = this._content.includes("football-club") ? this._content.split('_')[0] : this._content 
    }catch{
      var site = this._content
    }
    
    if(site === "football-club"){
      let splitvalue = this._content.split('_')
      const contentElement = document.createElement(`${site}`);
      this.appendChild(contentElement);
      let Data = new DataSource(URL,years,splitvalue[1]);
      Data.clubInfo()
      
    }else{
      const contentElement = document.createElement(`${site}`);
      this.appendChild(contentElement);
      let Data = new DataSource(URL,years);
      Data.scoreTable()
    }
    
    
    
    
  }
}

customElements.define('app-area', AppArea);