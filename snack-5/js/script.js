const newElement = document.getElementById('output')

const number = []

for (let i = 1; i <= 100 ; i++){
     if (i % 7 == 0 || i % 8 == 0){
        number.push(i);
     }
}

console.log(number);