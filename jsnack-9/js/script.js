// ? Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

const typeNumberOfSeven = prompt ('type a 7 digit number');
const singleNumber = typeNumberOfSeven.split('');
let somma = 0;

for (let i=0 ; i < singleNumber.length; i++){
    somma = somma + parseInt(singleNumber [i]);
}

console.log(somma)

