/*
! Snack 3
* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
* l'array generato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
* se come numeri ad esempio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
* La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
* Usiamo i nuovi metodi degli array foreach o filter.
*/

const nomi = ['Luca', 'Michele', 'Marco', 'Sara', 'Elisa'];

function items(array, a, b) {
    const nomiPersone = array.filter((element, index) => {
        return index > a && index < b;
    })
    return nomiPersone
}

console.log(items(nomi, 0, 4));