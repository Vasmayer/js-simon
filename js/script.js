/* 
Descrizione:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. 
il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
 sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero */


/* FUNCTIONS */
/* restituisce un numero casuale */
const rdnNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) - min; 

const generateRdnNumbers = (num,element) =>
{
    const randomNumbers = [];

    let message = '';
    let i=0;

    do{
        const rdn = rdnNumber(1,100);
        if(!randomNumbers.includes(rdn))
        {   randomNumbers.push(rdn);
            message += `<div>${rdn}</div>`;     
        }

    }while(randomNumbers.length<num)

    element.innerHTML = message;

    return randomNumbers;
}

const display = document.getElementById('display');
const button = document.getElementById('avviatimer');
const numRdn = 5;
const randomNumbers = generateRdnNumbers(numRdn,display); 

button.addEventListener('click',() => {

    setTimeout(() =>{
        display.innerHTML = '<div>*</div><div>*</div><div>*</div><div>*</div><div>*</div>';

        const choosenNumbers = [];

        for(let i =0;i<numRdn;i++)
        {
            const choosenNumber = prompt(`Inserisci il numero ${i + 1}/${numRdn}, il numero non deve essere ripetuto`);

            if(choosenNumbers.includes(choosenNumber))
            {
                i--;
            }
        }
    },3000);



});



