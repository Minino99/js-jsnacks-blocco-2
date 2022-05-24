// Snack1
// Inserisci un numero, se è pari stampa il numero,
//  se è dispari stampa il numero successivo.

const executeButton = document.getElementById("execute")

executeButton.addEventListener("click", function () {
 let inputNumber = parseInt(document.getElementById("input").value);
 if (inputNumber % 2 === 0){
  document.getElementById("tipo").innerHTML=(`pari: ${inputNumber}`)
 } else{
  document.getElementById("tipo").innerHTML=(`dispari, quindi il numero pari più vicino è: ${inputNumber + 1}`)
 }
});