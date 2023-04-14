/*
! Snack 1
* Creare un array di oggetti:
* Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
* Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 
*/

const bici = [
    {
        nome: 'Luca',
        peso: '30',
    },
    {
        nome: 'Marco',
        peso: '20',
    },
    {
        nome: 'Maria',
        peso: '15',
    },
    {
        nome: 'Sara',
        peso: '10',
    },
    {
        nome: 'Mattia',
        peso: '23',
    }
]


for (let i = 0; i < bici.length; i++) {
    
    if (bici[i].peso <= 10) {
        
        const {nome, peso} = bici[i]

        document.querySelector('body').innerHTML +=`
        <div>
            <div>
                <h1>La bici con il peso minore è : "${nome} ${peso}"</h1>
            </div>
        </div>
        `
        console.log(nome, peso);
    }

}
