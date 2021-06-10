/* JSnack4 15 minuti
Scrivi una funzione capitalize che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo*/

function capitalize(string) {

    var capString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

    return capString;
    
}

var word = prompt('Inserisci una parola,la formatterò correttamente!');

var capWord = capitalize(word);

document.getElementById('funzioni4').innerHTML = capWord;