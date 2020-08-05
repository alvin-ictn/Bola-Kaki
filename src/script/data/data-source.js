class DataSource {
    constructor(baseUrl,years,teamId){
        this.baseUrl = baseUrl;
        this.years = years;
        this.teamId = teamId;
        this.token = '4358e7de8802477f876b7710250a68c2';
    }
    
    // Fungsi Score Table untuk melihat perolehan score saat ini
    scoreTable(){
        if ("caches" in window) {
            caches.match(`${this.baseUrl}competitions/${this.years}/standings`)
            .then( response => {
                if (response) {
                    response.json()
                    .then(responseJson => {
                        return responseJson.standings;
                    })
                    .then(tableData => {
                        let scoreTable = document.querySelector('score-table');
                        scoreTable.table = tableData;
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }
            })
            .catch( err => {
            console.log(`Error : ${err}`);
            })
        }
      
        // Fetch Data dari API
        return fetch(`${this.baseUrl}competitions/${this.years}/standings`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': this.token,
            }
        })
        .then( response => {
            return response.json();
        })
        .then(responseJson => {
            return responseJson.standings
        })
        .then(tableData=>{
            let scoreTable = document.querySelector('score-table');
            scoreTable.table = tableData;
        }).then(()=>{
            let el = document.getElementById('tabs-swipe-demo');
            let instance = M.Tabs.init(el, {
              swipeable : true,
              fullWidth:true,
            });
          }).then(()=>{
            let getTable = document.querySelectorAll('table[id*="tabel-standings"]');
            let targetTab = document.querySelector('.tabs-content.carousel');
            targetTab.style.height = `${getTable[0].clientHeight}px`;
          })
          .catch(error=>{
            console.log(error);
        })
    }

    //Fungsi untuk melihat informasi salah satu Klub Bola
    clubInfo(){
        if("caches" in window) {
            caches.match(`${this.baseUrl}teams/${this.teamId}`).then(function(response) {
                if (response) {
                    response.json().then(function(data) {
                    // Sisipkan komponen card ke dalam elemen dengan id #content
                    return response.json()
                    });
                }
            });
        }
        return fetch(`${this.baseUrl}teams/${this.teamId}`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': this.token,
            }
        })
        .then(response => {
            return response.json()
        })
        .then(function(data) {
        // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db

        // Objek JavaScript dari data.json() masuk lewat variabel data.
            //console.log(data)
            let clubInfo = document.querySelector('football-club');
            clubInfo.detailInfo = data
        })
        .then(()=>{
            let x = document.querySelectorAll('.materialboxed');
            var y = document.querySelectorAll('.collapsible');
            var instances = M.Materialbox.init(x);
            var instances2 = M.Collapsible.init(y);
        })
        .catch(error => {
            console.error(error);
        });
    }
}

export default DataSource;