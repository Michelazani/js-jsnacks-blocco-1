// chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

const typeAgeOne = parseInt (prompt ('How old are you?'));

const typeAgeTwo =  parseInt (prompt ('How old are you?'));



if ( typeAgeOne > typeAgeTwo) {
    console.log ('first age is the oldest')
}
else if ( typeAgeTwo > typeAgeOne) {
    console.log ('second age is the oldest')
}
