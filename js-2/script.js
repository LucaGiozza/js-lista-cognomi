// Lista Cognomi:
// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi:
//  ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1)
//  della lista in cui il nuovo utente si trova

var cognome = prompt('inserisci il tuo cognome');



var lista = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
lista.push(cognome);


document.getElementById("colori").innerHTML = lista;
lista.sort();


// possibile soluzione

//  var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

//  var cognomeUtente = prompt('inserisci il cognome');

//  cognomi.push(cognomeUtente);


// cognomi.sort();
// console.log(cognomi);

// for(var i = 0; i < cognomi.length; i++){
//     document.getElementById('colori').innerHTML += cognomi[i] + '';
//      if ( cognomi[i] == cognomeUtente){
//         document.getElementById('posizione-elemento').innerHTML = i + 1;
//      }
// }

// seconda soluzione nel caso in cui mi interessa solo la posizione

var i = 0;
while(cognomeUtente != cognomi[i]){
    i++;
}