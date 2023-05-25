"use strict";

//pari o dispari
const pari = 0;
const dispari = 1;
console.log("pari:" + pari )
console.log("dispari:" + dispari )
 
// Chiedo all'utente di sceglire pari/ dispari e un numero tra 1 e 5
let user0_1 = parseInt(prompt("inserisci 0 se scegli pari, 1 se scegli dispari"));

console.log("l'utente ha scelto :" +  user0_1);

let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("userNumber :" +  userNumber);

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
if ((controlloSomma(somma) === 0 ) && (user0_1 === 0)){
    console.log ("Ha vinto il giocatore")
}
else if( (controlloSomma(somma) === 1 ) && (user0_1 === 1)){
    console.log ("Ha vinto il giocatore")
}else{
    console.log ("Ha vinto il pc")
}