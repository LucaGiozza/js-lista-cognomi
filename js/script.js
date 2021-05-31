// Mail :
// Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.
// Lista Cognomi:
// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi:
//  ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1)
//  della lista in cui il nuovo utente si trova

 var mail = prompt('Inserisci la tua mail');
 var nomi = ['luca@gmail.com', 'matteo@gmail.com', 'simone@gmail.com', 'chiara@gmail.com' ];
 for (var i = 0; i < nomi.length; i++){
    

     if( mail == 'luca@gmail.com' ){
      console.log('corretto, accesso disponibile');
        
     } else if( mail == 'matteo@gmail.com'){
         console.log('corretto, accesso disponibile')
     }else if( mail == 'simone@gmail.com'){
        console.log('corretto, accesso disponibile');

     }else if( mail == 'chiara@gmail.com'){
         console.log('corretto, accesso disponibile')
     } else{
        console.log('Mi dispiace, non sei in lista');
    }
}




