/* JSnack3 20 minuti
Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

function fusion(array1,array2) {

    while (array1.length != array2.length) {
        alert('Attenzione i 2 array devono avere la stessa lunghezza');
    }

    var length = array1.length;

    var newarray = [];

    for (var i= 0; i < length; i++) {
        newarray.push(array1[i], array2[i]);
    }

    return newarray;
}

var letters = ['a','b','c'];
var numbers = [1,2,3];

var myArray = fusion(letters, numbers);

document.getElementById('funzioni3').innerHTML = myArray;
