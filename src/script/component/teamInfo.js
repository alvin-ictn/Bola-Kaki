class ClubInfo extends HTMLElement{
	constructor() {
		super();
	}

	set detailInfo(datas) {
		console.log(datas)
		this._datas = datas;
		this.ClubInfo();
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
	ClubInfo(){
		let renderHTML = `
<div class="container liga">
	<h4>${this._datas.name}</h4> <div class="row">
  		<div class="col s12 m4"><img class="materialboxed" 
    		data-caption="A picture of a way with a group of trees in a park" 
			viewBox="0 0 10 10"
			width="100%"
			src="${this._datas.crestUrl}" 
			alt="infowhen offline">
		</div>
      	<div class="col s12 m8">
        	<ul class="collapsible">
				<li>
					<div class="collapsible-header">Club Info</div>
					<div class="collapsible-body">
						<table class="striped">
							<tbody>
							<tr>
								<td class="topicInfo" colspan="2">Basic Info</td>
							</tr>
							<tr>
								<td>Club Name</td>
								<td>: ${this._datas.name}</td>
							</tr>
							<tr>
								<td>Club Short Name</td>
								<td>: ${this._datas.shortName}</td>
							</tr>
							<tr>
								<td>Founded</td>
								<td>: ${this._datas.founded}</td>
							</tr>
							<tr>
								<td>Club Color</td>
								<td>: ${this._datas.clubColors}</td>
							</tr>
							<tr>
								<td>Club Nationality</td>
								<td>: ${this._datas.area.name}</td>
							</tr>
							<tr>
								<td>Club Venue</td>
								<td>: ${this._datas.venue}</td>
							</tr>
							<tr>
								<td class="topicInfo" colspan="2">Contact Info</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>: ${this._datas.email}</td>
							</tr>
							<tr>
								<td>Phone</td>
								<td>: ${this._datas.phone}</td>
							</tr>
							<tr>
								<td>Website</td>
								<td>: ${this._datas.website}</td>
							</tr>
							</tbody>
						</table>
					</div>
				</li>
			</ul>        
		</div>
      	<div class="col s12 m12">
        	<table>
         		<thead>
             		<tr>
						<th>SN</th>
						<th>Nationality</th>
						<th>Name</th>
						<th>Position</th>
						<th>Role</th>
					</tr>
            	</thead>
            	<tbody>`;
					this._datas.squad.forEach(dataMember=>{
						renderHTML += `<tr>
						<td>${dataMember.shirtNumber ? dataMember.shirtNumber : " "}</td>
						<td>${dataMember.nationality}</td>
						<td>${dataMember.name}</td>
						<td class="text-color-${dataMember.position == "Attacker"? "red" : dataMember.position == "Defender" ? "green" : dataMember.position == "Goalkeeper" ? "blue" : dataMember.position == "Midfielder" ? "brown": "default"}">${dataMember.position ? dataMember.position : " "}</td>
						<td>${dataMember.role}</td>
					</tr>`
					})
	renderHTML += `
				</tbody>
			</table>
		</div>
	</div>
</div>`
  //show data
  this.innerHTML = renderHTML;
  }
}

customElements.define('football-club', ClubInfo);
