import AdminTermek from "./AdminFelhasznalo.js";

export default class AdminFelhasznalok {
    #lista = [];
    #pElem;
    constructor(lista, pElem) {
        this.#lista = lista;
        this.#pElem = pElem;
        this.megjelenit();
    }

    megjelenit() {
        let html = `
            <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Felhasználónév</th>
                    <th scope="col">Email</th>
                    <th scope="col">Jelszó</th>
                </tr>
            </thead>
            <tbody>
           
            </tbody>
            </table> 
        `
   
        this.#pElem.insertAdjacentHTML("beforeend",html)
        this.#lista.forEach((element, index) => {
            new AdminFelhasznalo(element,this.#pElem.querySelector("table tbody"))
        });
    }  
}