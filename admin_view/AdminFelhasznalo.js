export default class AdminFelhasznalo {
    #adatObj = {};
    #pElem;
    constructor(adatObj, pElem) {
        this.#adatObj = adatObj;
        this.#pElem = pElem;
        this.megjelenit();
        this.torolGOMG=this.#pElem.querySelector("tr:last-child td:last-child .torol ")
        console.log(this.torolGOMG)
    }

    megjelenit() {
        let html = `
                <tr>
                    <td scope="col">${this.#adatObj.id}</td>
                    <td scope="col">${this.#adatObj.username}</td>
                    <td scope="col">${this.#adatObj.email}</td>
                    <td scope="col">${this.#adatObj.password}</td>
                    <td scope="col">
                        <button class="torol">🗑</button>
                    </td>
                </tr>
            `;
        this.#pElem.insertAdjacentHTML("beforeend", html);
    }

    esemenykezeles(){
        this.torolGOMG.addEvenetListener("click",()=>{
            window.dispatchEvent(new CustomEvent("torol",{detail:this.#adatObj.id}))
        })
    }
}