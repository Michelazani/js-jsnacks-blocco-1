// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const userWord = prompt ('type a world') ;
const userSecondWord = prompt ('type a world') ;

console.log (userWord)
console.log(userSecondWord)

if (userWord.length > userSecondWord.length) {
   console.log(userSecondWord, userWord )
}
else if (userWord.length < userSecondWord.length) {
   console.log(userWord, userSecondWord)
}