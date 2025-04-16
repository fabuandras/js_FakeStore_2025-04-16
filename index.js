import AdminFelhasznalo from "./admin_view/AdminFelhasznalo.js";
import AdminTermekek from "./admin_view/AdminTermekek.js";
import Modell from "./Modell.js";

const ADMINGOMB = document.getElementById("admin");
const TERMEKEKGOMB = document.getElementById("termekek");
const KOSARGOMB = document.getElementById("kosar");
const TAROLO = document.querySelector(".tarolo");
let LISTA = [];

const modell=new Modell(LISTA)
modell.getAdat("https://fakestoreapi.com/products",adminPeldanyosit, "https://fakestoreapi.com/carts", felhasznaloPeldanyosit)

TERMEKEKGOMB.addEventListener("click", () => {
  TAROLO.innerHTML = `<article class="col-lg-9"> Termékek</article>
                      <aside class="col-lg-3">Kosár</aside>`;
});

KOSARGOMB.addEventListener("click", () => {
  TAROLO.innerHTML = `<article class="col-lg-12"> Kosár</article>`;
});

ADMINGOMB.addEventListener("click", () => {
    modell.getAdat("https://fakestoreapi.com/products",adminPeldanyosit, "https://fakestoreapi.com/carts", felhasznaloPeldanyosit)
});


function adminPeldanyosit(lista) {
    TAROLO.insertAdjacentHTML("beforeend",`<article class="col-lg-12"> Admin</article>`);
    new AdminTermekek(lista, TAROLO.querySelector("article"));
}

function felhasznaloPeldanyosit(lista) {
  TAROLO.insertAdjacentHTML("beforeend",`<article class="col-lg-12"> Admin</article>`);
  new AdminFelhasznalok(lista, TAROLO.querySelector("article"));
}

window.addEventListener("torol",(event)=>{
    console.log(event.detail)
    /* itt hívom meg a törlés végpontját delete kéréssel */
})