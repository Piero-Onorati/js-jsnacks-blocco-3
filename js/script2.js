/* jsnack2 - 20 minuti
Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.*/

function length(word1, word2) {

    if (word1.length == word2.length ) {
        return word1 + ' + '+ word2;
        
    } else if (word1.length > word2.length){
        return word1;

    }else{
        return word2;
    }

}

var firstword= prompt('inserisci una parola');
var secondword= prompt('inserisci un\' altra parola');


var riultato = length(firstword,secondword);
document.getElementById('funzioni2').innerHTML = riultato;