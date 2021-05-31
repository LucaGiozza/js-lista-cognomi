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
