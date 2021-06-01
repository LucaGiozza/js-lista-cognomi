// Mail :
// Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.


//  var mail = prompt('Inserisci la tua mail');
//  var nomi = ['luca@gmail.com', 'matteo@gmail.com', 'simone@gmail.com', 'chiara@gmail.com' ];
//  for (var i = 0; i < nomi.length; i++){
//     var risultato = "corretto, accesso disponibile"
//     var negazione = " Mi dispiace, non sei in lista"
 
//      if( mail == nomi[i] ){
//         document.getElementById("email").innerHTML =risultato;
        
//       } else if( mail == 'matteo@gmail.com'){
//           document.getElementById("email").innerHTML =risultato;
//        }else if( mail == 'simone@gmail.com'){
//          document.getElementById("email").innerHTML =risultato;

//        }else if( mail == 'chiara@gmail.com'){
//           document.getElementById("email").innerHTML =risultato;
//         } else{
//         document.getElementById("email").innerHTML =negazione;
      
//     }

//    }
   

  // Prima soluzione possibile

    var mail = prompt('Inserisci la tua mail');
     var nomi = ['luca@gmail.com', 'matteo@gmail.com', 'simone@gmail.com', 'chiara@gmail.com' ];
     var trovato = false
   
    for (var i = 0; i < nomi.length; i++){
      if(mail == nomi[i]){
        trovato = true;
      }
    }

    if(trovato){
      console.log('email trovata')
    }else{
      console.log('email non trovata')
    }


  // seconda soluzione possibile con while

//  var trovato = false;
//  var i = 0

//  while(i < nomi.length && trovsto == false){
//    if(mail == nomi[i]){
//      trovato = true ;
//    }
//    i++
//  }


//  if(trovato){
//        console.log('email trovata');
//      }else{
//        console.log('email non trovata');
//      }
