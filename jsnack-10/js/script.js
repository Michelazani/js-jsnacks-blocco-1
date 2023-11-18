//? Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre): 
//? moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.


const typeNumberOne = parseInt (prompt ('type a 2 digit number'));
const typeNumberTwo = parseInt (prompt ('type a min 4 digit number'));

let finalNumber;


for (let i = typeNumberOne; i <= typeNumberTwo; i=i*2){
    if (i>=typeNumberTwo / 2){
        finalNumber=i;
    }
}

console.log (finalNumber*2)
