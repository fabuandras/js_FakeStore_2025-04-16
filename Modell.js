/* végrehajtja az API kéréseket és kezeli a listát */

export default class Modell {
    #lista = [];
    constructor(lista) {
      this.#lista = lista;
    }
  
    getAdat(vegpont,callback) {
      /*  lekérdezzük a listába az adatokat a végpontról. 
          FETCH segítségével
          Asszinkron módon
          */
      fetch(vegpont)
        .then((response) => response.json())
        .then((data) => {
          this.#lista = data;
          console.log(this.#lista);
          callback(this.#lista);
        })
        .catch((error) => console.log(error));
    }
    
    deleteAdat() {}
    postAdat() {}
  }