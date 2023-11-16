// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (createlo voi con almeno 5 nomi), 
// chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.


const greatGatsbyParty = [
   'Giacomo',
   'Giorgia',
   'Giovanni',
   'Giorgio',
   'Antonio'
]; 


const checkGuests = document.querySelector('button');
const nameGuest = document.querySelector ('input');
const typeAgain = document.querySelector ('p')


let accepted = false;
 
checkGuests.addEventListener ('click' , function (){

   for (let i = 0; i < greatGatsbyParty.length ; i++){

       if(greatGatsbyParty[i] === nameGuest.value ){
           found = true;
            alert('enjoy the party');
       }    
  }

  
  alert(accepted = 'try again' )
})