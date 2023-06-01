"use strict";

// Chiedo all'utente di sceglire pari o dispari e un numero tra 1 e 5
let userChoise = prompt(' Scegli "pari" o "dispari" ');
console.log(userChoise)

//Controllo inserimento valori
while( userChoise !== 'pari' && userChoise !== 'dispari'){
    userChoise = prompt('puoi inserire solo la parola "pari" o "dispari"')
}

//Chiedo all'utente di inserire un numero da  1 a 5
let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("userNumber :" +  userNumber);

//Controllo inserimento valori
while(isNaN(userNumber) || userNumber < 1  || userNumber > 5){

    userNumber = parseInt(prompt("inserisci nuovamente un numero da 1 a 5"));
}

//Genero un numero randdom per il pc tra 1 e 5
let pcNumber = Math.floor((Math.random() * 5) + 1);
console.log("pcNumber :" +  pcNumber);

//Sommo numero utente e numero pc
let somma = userNumber + pcNumber;
console.log("somma:" +  somma)

//Dichiaro una funzione per controllare se la somma è pari o dispari
function controlloSomma(c_somma) {

    if(c_somma % 2 === 0) {
        //restituisce pari
        return 0;
    }else{
        //restituisce dispari
        return 1;
    }
}

//Chiamo la funzione per dichiarare il vincitore
if ((controlloSomma(somma) === 'pari' ) && (userChoise === 'pari')){
    console.log ("Ha vinto il giocatore")
}
else if( (controlloSomma(somma) === 'dispari' ) && (userChoise === 'dispari')){
    console.log ("Ha vinto il giocatore")
}else{
    console.log ("Ha vinto il pc")
}