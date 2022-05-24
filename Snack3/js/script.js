// Snack1
// Inserisci un numero, se è pari stampa il numero,
//  se è dispari stampa il numero successivo.

const executeButton = document.getElementById("execute");
const numbersArray = [3, 4, 7, 12, 632, 43, 567, 11 , 32];


executeButton.addEventListener("click", function () {
 var somma = 0;
for(i = 0; i <= numbersArray.length; i++){
 if (i % 2 === 1){
  somma = (somma + numbersArray[i]);
 } else{
  somma = (somma + 0)
 }
}
console.log(somma)

});