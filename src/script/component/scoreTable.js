class ScoreTable extends HTMLElement{
  constructor() {
    super();
  }

  set table(datas) {
    console.log(datas)
    this._datas = datas;
    this.ScoreTable();
    //this.teamAction();
  }
  //preload function
  connectedCallback() {
      this.innerHTML = `
      <div class="center-loader">
          <div class="preloader-wrapper small active">
              <div class="spinner-layer spinner-black-only">
                  <div class="circle-clipper left">
                      <div class="circle"></div>
                  </div><div class="gap-patch">
                      <div class="circle"></div>
                  </div><div class="circle-clipper right">
                      <div class="circle"></div>
                  </div>
              </div>
          </div>
      </div>`;
  }
  //Show Score Table
  ScoreTable(){
      let renderHTML = `
<ul id="tabs-swipe-demo" class="tabs">
  <li class="tab col s3"><a href="#total">TOTAL</a></li>
  <li class="tab col s3"><a href="#home">HOME</a></li>
  <li class="tab col s3"><a href="#away">AWAY</a></li>
</ul>`;
  this._datas.map(data=> {
      renderHTML += `
<div id="${data.type.toLowerCase()}" class="col s12">
  <table class="highlight" id="tabel-standings-${data.type.toLowerCase()}">
      <thead>
          <tr>
              <th></th>
              <th>Team</th>
              <th class="centered">PG</th>
              <th class="centered">W</th>
              <th class="centered">D</th>
              <th class="centered">L</th>
              <th class="centered">GF</th>
              <th class="centered">GA</th>
              <th class="centered">GD</th>
              <th class="centered">Pts</th>
          </tr>
      </thead>
      <tbody>`
          data.table.forEach(dataLiga=>{
              renderHTML +=`
          <tr>
              <td>${dataLiga.position}</td>
              <td class="team"><svg class="svgEmblem"><image xlink:href="${dataLiga.team.crestUrl}" class="imgEmblem" alt="${dataLiga.team.name} Emblem"/></svg><a href="./team.html?id=${dataLiga.team.id}">${dataLiga.team.name}</a></td>
              <td class="centered">${dataLiga.playedGames}</td>
              <td class="centered">${dataLiga.won}</td>
              <td class="centered">${dataLiga.draw}</td>
              <td class="centered">${dataLiga.lost}</td> 
              <td class="numGF centered">${dataLiga.goalsFor}</td>
              <td class="numGA centered">${dataLiga.goalsAgainst}</td>
              <td class="centered">${dataLiga.goalDifference>0?"+"+dataLiga.goalDifference:dataLiga.goalDifference}</td>
              <td class="numPts centered">${dataLiga.points}</td>
          </tr>`
          })
          renderHTML += `
      </tbody>
  </table>
</div>`;
      })
  //show data
  this.innerHTML = renderHTML;
  }
}

customElements.define('score-table', ScoreTable);
