import get from "./getElement.js";
import removeActive from "./removeActive.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  console.log(person);
  //Stampo info iniziali
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = "My name is";
  //Rimuovo la classe active a tutti i bottoni
  removeActive(btns);
  //Setto la classe active al primo bottone
  btns[0].classList.add("active");

  btns.map((btn) => {
    //btn.dataset.label --> recupero il label di ogni bottone
    const label = btn.dataset.label;
    //Al click dei bottoni compilo i campi
    btn.addEventListener("click", () => {
      title.textContent = `My ${label}`;
      value.textContent = person[label];
      //Rimuovo la classe active a tutti i bottoni
      removeActive(btns);
      //Setto la classe active al bottone dove è avvenuto il click
      btn.classList.add("active");
    });
  });
};

export default displayUser;
