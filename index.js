import get from "./src/getElement.js";
import getUser from "./src/fetchUSer.js";
import displayUser from "./src/displayUser.js";

const btn = get(".button-xs");

const showUser = async () => {
  //Fetch data
  const person = await getUser();

  // Alternativa alla funzione async:
  //getUser().then((data) => console.log(data)); --> togliendo async da sopra

  //Display data
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
