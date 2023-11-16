// ? Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

const emptyArray = []


for (let i = 0; i < 6; i++) {
    const typeNumber = parseInt (prompt ('type a number'));

    
    if (typeNumber % 2 !== 0) {
        emptyArray.push(typeNumber);
    }
}

console.log(emptyArray);