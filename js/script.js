// CONSEGNA

// - Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.

// - Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto 
//   precedentemente, tramite il prompt().

// - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
//   da indovinare sono stati individuati.




// Visualizzo 5 alert con numeri da 1 a 100.
for ( let i = 0; i < 5; i++ ) {
    casualNumber = Math.floor(Math.random() * 100) + 1
    alert(`Numero: ${casualNumber}`)
}

// Dopo i 30 secondi , l'utente inserisce un numero alla volta attraverso il prompt


// stampo successivamente quanti numeri e quali ha indovinato l'utente.



