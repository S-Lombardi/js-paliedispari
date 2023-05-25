"`use strict";

//Assegno una variabile alla parola che inserisce l'utente
let userWord = prompt("Scrivi qui una parola");
console.log(userWord)

//creo una funzione che controlli se una parola è palindroma o meno
function confrontoPalindroma(inputUtente) {
    
    //trasformo la parola in un array con split()
    //inverto gli elementi/lettere dell'array con reverse()
    //unisco le lettere con join ()
    let inputUtenteReverse = inputUtente.split("").reverse().join("");
    console.log(inputUtenteReverse)
    
    //contronto le due parole
    if(inputUtente === inputUtenteReverse) {
        return "parola palindroma"
    }else{
        return "parola non palindroma"
    }  
}

let risultato = confrontoPalindroma(userWord);
console.log(risultato)


// if(risultato === "palindroma") {
//     console.log("la parola è palindroma");
// }
// else {
//     console.log("la parola non è palindroma");
// }
