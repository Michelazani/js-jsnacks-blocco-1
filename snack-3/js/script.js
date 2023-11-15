const newElement = document.getElementById('output')

for (let i = 1; i <= 6 ; i++){
    const divElement = document.createElement ('div');
    
    divElement.innerHtml = i;

    // console.log(i)
    document.getElementById ('output') .innerHTML += i

}