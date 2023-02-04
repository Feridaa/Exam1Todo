"use strict";

// insertion d'un nouveau todo

const input = document.querySelector("#input-todo");
const menuListe = document.querySelector("#list");

const affichage = () => {
  const inputGuess = input.value;
  const html = `<li data-category="home" data-done="true">
    ${inputGuess}
    <div class="button-done">❌</div>
    </li>`;

  menuListe.insertAdjacentHTML("afterbegin", html);
};

document.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    affichage();
    inputGuess.value = "";
    inputGuess.blur();
  }
});

menuListe.addEventListener("keyup", affichage);
