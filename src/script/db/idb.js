//import { openDB, deleteDB, wrap, unwrap } from 'idb';
import {openDB} from 'idb';

const dbPromised = openDB('football-info', 1, {
  upgrade(db) {
    console.log("check the dbpromise")
    console.log(db)
    const store = db.createObjectStore('favorite', {
      keyPath: 'id'
    });
    console.log("test the store file")
    console.log(store)
    store.createIndex('name', 'name', { unique: false });
  }
});

function saveFavorite(team) {
  dbPromised
    .then( db => {
      console.log("this is db check")
      console.log(db)
      // Define Transaction
      const tx = db.transaction("favorite", "readwrite");
      // Define StoreName
      const store = tx.objectStore("favorite");
      console.log("check tx")
      console.log(tx)
      console.log(store)
      console.log("test")
      console.log(team)
      // Add Data 'article.result' to objectStore 'articles'
      store.add(team);
      console.log("after team")
      
      console.log(tx.complete)
      return tx.complete;
    })
    .then( () => {
      M.toast({
        html: `
          <span> Berhasil Menyimpan </span>
        `,
        completeCallback: () => {
          window.location.replace('#favorite');
          location.reload();
        },
        displayLength:1000
      });
    })
    .catch( error => {
      console.log(`Gagal Menyimpan ${error}`);
    })
}

// Get All Data from Database
function getAllSaved() {
  return new Promise( (resolve, reject) => {
    dbPromised
      .then( db => {
        var tx = db.transaction("favorite", "readonly");
        var store = tx.objectStore("favorite");
        //console.log(store)
        return store.getAll();
      })
      .then( team => {
        resolve(team);
      });
  });
}

function getByIdSaved(id) {
  return new Promise( (resolve, reject) => {
    dbPromised
      .then( db => {
        var tx = db.transaction("favorite", "readonly");
        var store = tx.objectStore("favorite");
        console.log(store)
        return store.get(parseInt(id));
      })
      .then( team => {
        console.log("KOKG")
        console.log(team)
        resolve(team);
      });
  });
}

function deleteFavorite(id) {
  return new Promise( (resolve, reject) => {
    dbPromised
      .then( db => {
        var tx = db.transaction("favorite", "readwrite");
        var store = tx.objectStore("favorite");

        return store.delete(parseInt(id));
      })
      .then( team => {
        M.toast({
          html: `Berhasil Menghapus`,
          completeCallback: () => {
            window.history.go(-1)
          },
          displayLength:1000
        });
        resolve(team);
      })
      .catch( error => {
        console.log(`Gagal Menghapus ${error}`);
      });
  });
}

export {saveFavorite, getAllSaved, getByIdSaved, deleteFavorite}
