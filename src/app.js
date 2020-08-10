import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import "./script/view/main.js";
import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js";

import {URL,years} from './script/data/config';
import DataSource from './script/data/data-source.js';
 
window.onhashchange = () => { 
  let namaHalaman = location.hash.substr(1);
  if(namaHalaman == "score"){
    let Data = new DataSource(URL,years);
    Data.scoreTable()
  }else if(namaHalaman.includes('teamid')){
    let Data = new DataSource(URL,years,namaHalaman.split('=')[1]);
    Data.clubInfo()
  }else if(namaHalaman == "favorite"){
    let Data = new DataSource(URL,years)
    Data.favorite()
  }
  console.log(`${namaHalaman} COBHA`)
  const mainArea = document.querySelector('app-area');
  console.log(mainArea)
  mainArea.page = namaHalaman;

};