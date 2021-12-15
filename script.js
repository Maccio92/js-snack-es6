/* Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. */

// Creo array di base
let numb = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// Chiedo all'utente 2 valori min e max
let min = parseInt(prompt('Inserisci una valore minimo tra 1 e 20'));
let max = parseInt(prompt('Inserisci una valore massimo tra 1 e 20'));;

let newArrayNumbers = getNewArray(numb, min, max);

// Funzione
function getNewArray(array, min, max) {
    let newArrayNumbers = [];
    array.forEach((number,index) => {  
        if (index > min - 1  && index < max - 1) {
            newArrayNumbers.push(number); 
        }
    });
    return newArrayNumbers;
}
// console.log(numbers, newArrayNumbers);