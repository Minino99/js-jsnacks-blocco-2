// Snack2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi,
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

const executeButton = document.getElementById("execute");
const nomi = [
  "armando",
  "gerardo",
  "pasquale",
  "antonia",
  "gennaro",
  "filippo",
  "domenico",
  "peppino",
];
const cognomi = [
  "impestato",
  "verdi",
  "rossi",
  "marquez",
  "leclerc",
  "hamilton",
  "banana",
  "fragola",
];

executeButton.addEventListener("click", function () {
  document.getElementById("list").innerHTML = "";
  for (let i = 0; i < 10; i++) {
    document.getElementById("list").innerHTML += `<li>${
      nomi[Math.floor(Math.random() * nomi.length)]
    } ${cognomi[Math.floor(Math.random() * cognomi.length)]}</li>`;
  }
});
