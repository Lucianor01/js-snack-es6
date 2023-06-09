/*
! Snack2
* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
* Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
* Generare numeri random al posto degli 0 nelle proprietà:
* Punti fatti e falli subiti.
* Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 
*/

const squadraCalcio = [
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0,
    },
]

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

squadraCalcio.forEach( squadra => {
    squadra.puntiFatti = numeroRandom(0, 100)
    squadra.falliSubiti = numeroRandom(0, 50)
    // console.log(squadra.puntiFatti);
    // console.log(squadra.falliSubiti);
})

const squadraNomeFalliSubiti = squadraCalcio.map(({nome, falliSubiti}) => ({nome, falliSubiti}))
console.log(squadraNomeFalliSubiti);