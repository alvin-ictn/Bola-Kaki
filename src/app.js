import 'materialize-css/dist/css/materialize.min.css';
import "./styles/style.css";
import 'materialize-css/dist/js/materialize.min.js';
import "./script/view/main.js";
import "regenerator-runtime";

import "./script/component/app-bar.js";

import {URL,years} from './script/data/config';
import DataSource from './script/data/data-source.js';


let appArea = document.querySelector('app-area');
window.onhashchange = () => { 
  let namaHalaman = location.hash.substr(1);
  console.log(`WINDOW ${namaHalaman}`)
  if(namaHalaman == "score"){
    let Data = new DataSource(URL,years);
    Data.scoreTable()
  }else if(namaHalaman.includes('teamid')){
    let Data = new DataSource(URL,years,namaHalaman.split('=')[1]);
    Data.clubInfo()
  }else if(namaHalaman == "favorite"){
    console.log("FUK??")
    console.log(appArea)
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
  console.log(`DOM ${namaHalaman}`)
  if(namaHalaman == "score"){
    let Data = new DataSource(URL,years);
    console.log(Data)
    Data.scoreTable()
  }else if(namaHalaman.includes('teamid')){
    let Data = new DataSource(URL,years,namaHalaman.split('=')[1]);
    Data.clubInfo()
  }else if(namaHalaman == "favorite"){
    console.log("FUK??")

    let element = document.createElement('saved-team');
    appArea.appendChild(element)
    console.log(appArea)
    let Data = new DataSource(URL,years)
    Data.favorite()
  }else if(namaHalaman.includes("12321321")){

  }
  console.log(`${namaHalaman} COBHA`)
  const mainArea = document.querySelector('app-area');
  console.log(mainArea)
  mainArea.page = namaHalaman;
})


 document.querySelectorAll('ul.topnav a, ul.sidenav a')
    .forEach(element => {
      element.addEventListener('click', event => {
        const sideNav = document.querySelector('.sidenav');
        M.Sidenav.getInstance(sideNav).close();
        let namaHalaman = location.hash.substr(1);
        
        if(namaHalaman == "score"){
          let Data = new DataSource(URL,years);
          console.log(Data)
          Data.scoreTable()
        }else if(namaHalaman.includes('teamid')){
          let Data = new DataSource(URL,years,namaHalaman.split('=')[1]);
          Data.clubInfo()
        }else if(namaHalaman == "favorite"){
          console.log("FUK??")
          let element = document.createElement('saved-team');
          appArea.appendChild(element)
          let Data = new DataSource(URL,years)
          Data.favorite()
        }else if(namaHalaman.includes("12321321")){

        }
        appArea.content = namaHalaman === "score" ? "score-table" : namaHalaman === "favorite" ? "saved-team" : null

      });
    });