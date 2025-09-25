// MAIN CODE
console.log("PALINDROMA: ", isPalindroma("Anna"));

// Pari e Dispari
/**
 * l'utente deve inserire un numero da 1 a 6
 * l'utente deve scegliere tra Pari e Dispari
 * il computer deve generare un numero random da 1 a 6
 * si esegue la somma e si controlla se questa è Pari o dispari
 * SE (SceltaUtente === EvenOdd() )
 *  l'utente ha vinto
 * ELSE
 *  l'utente ha perso
 */

const userNumberString = prompt("Inserisci un numero tra 1 e 6");
if (!userNumberString) {
    console.error("Input non valido. Ricarica la pagina");
} else {
    const userNumber = parseInt(userNumberString);
    if (userNumber > 0 && userNumber <= 6) {
        const userChoise = prompt("Scommetti: scegli tra (P)ARI e (D)ISPARI");
        const randomChoise = generateRandomNumber(1, 6);
        console.log("randomChoise", randomChoise);
        const sum = userNumber + randomChoise;
        const checkSumEvenOdd = evenOdd(sum);

        let message = `${userNumber}+${randomChoise} = ${sum}: è ${checkSumEvenOdd} - userChoise = ${userChoise}: `;
        if (checkSumEvenOdd[0] === userChoise[0].toUpperCase()) {
            message += `Hai vinto!!!🥳🥳`;
        } else {
            message += `Hai Preso!😭`;
        }
        console.log(message);
    } else if (userNumber <= 0) {
        console.error("valore troppo piccolo");
    } else if (userNumber > 6) {
        console.error("valore troppo grande");
    }
}


// FUNCTIONS DEFINITION
/**
 * Descrizione: Genera un numero random compreso tra numero minimo e numero massimo, entrambi inclusi
 * author: Olga Demina
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 *
 */
function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

/**
 * Descrizione: funzione che definisce se il numero è pari
 * author: Olga Demina
 * 
 * @param {number} numberToCheck
 * @returns {boolean} true se pari, false se dispari
 */

function isEven(numberToCheck) {
    const result = numberToCheck % 2 === 0;
    return result;
}

// Prendo un numero, controllo se pari, in base al risultato restituisco una stringa PARI/DISPARI
/**
 * Descrizione: funzione che definisce se il numero è pari o dispari.
 * 
 * @param {number} numberToCheck
 * @returns {string} "PARI" se numero è pari, "DISPARI" altrimenti
 */

function evenOdd(numberToCheck) {
    let checkEvenOdd = "DISPARI";
    if (numberToCheck % 2 === 0) {
        checkEvenOdd = "PARI";
    }
    return checkEvenOdd;
}


/**
 * descrizione: funzione che verifica se una parola è palindroma.
 * 
 * @param {string} wordToCheck
 * @returns {boolean} true se palindroma, false altrimenti
 */
function isPalindroma(wordToCheck) {
    let isPalindromaCheck = true;
    const wordToCheckManaged = wordToCheck.toLowerCase();
    for (let i = 0; i < Math.round(wordToCheckManaged.length / 2) && isPalindromaCheck; i++) {
        curLeftChar = wordToCheckManaged[i];
        curRightChar = wordToCheckManaged[(wordToCheckManaged.length - 1) - i];
        if (curLeftChar !== curRightChar) {
            isPalindromaCheck = false;
        }
    }
    return isPalindromaCheck;
}