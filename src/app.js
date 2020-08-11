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
    console.log("FUK??")
    let testGetData = document.querySelector('saved-team');
    console.log(testGetData)
    let Data = new DataSource(URL,years)
    Data.favorite()
  }else if(namaHalaman.includes("12321321")){

  }
  console.log(`${namaHalaman} COBHA`)
  const mainArea = document.querySelector('app-area');
  console.log(mainArea)
  mainArea.page = namaHalaman;
};

document.addEventListener('DOMContentLoaded',() => {
  let namaHalaman = location.hash.substr(1);
  if(namaHalaman == "score"){
    let Data = new DataSource(URL,years);
    Data.scoreTable()
  }else if(namaHalaman.includes('teamid')){
    let Data = new DataSource(URL,years,namaHalaman.split('=')[1]);
    Data.clubInfo()
  }else if(namaHalaman == "favorite"){
    console.log("FUK??")
    let testGetData = document.querySelector('app-area');
    let element = document.createElement('saved-team');
    console.log(element)
    testGetData.appendChild(element)
    console.log(testGetData)
    let Data = new DataSource(URL,years)
    Data.favorite()
  }else if(namaHalaman.includes("12321321")){

  }
  console.log(`${namaHalaman} COBHA`)
  const mainArea = document.querySelector('app-area');
  console.log(mainArea)
  mainArea.page = namaHalaman;
})