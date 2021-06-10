/* JSnack1 20 min
Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

function range(array, a, b) {

    // controlli affinchè "a" sia sempre inferiore a "b" e "b" non sia mai maggiore della lunghezza totale dell'array da cui vado ad estrarre gli elementi //

    if (a > b ){
        alert('Attenzione!'+ a +' deve essere più piccolo di '+ b ) 
    } else if(b > array.length){
        alert('Attenzione!'+ b +' non può essere più grande di '+ array.length ) 
    }

    // soluzione a) con ".slice()"

    // var newarray = array.slice(a-1,b);
    // return newarray

     // soluzione b) con "cicle for"

    var newarray = [];
    for (i = a-1; i < b; i++) {
        newarray.push(array[i]);
    }

    return newarray
    
}

var numbers = [1,2,3,4,5,6,7];

var things = ['case', 'libri', 'auto', 'viaggi', 'fogli', 'giornale']


var myNewArray = range(numbers,2,5);

document.getElementById('funzioni1').innerHTML= myNewArray;