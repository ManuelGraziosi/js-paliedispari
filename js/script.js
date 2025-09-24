// MAIN CODE
console.log(isPalindroma(""))

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
 * Descrizione: funzione che definisce se il numero è pari o dispari
 * author: Olga Demina
 * 
 * @param {number} numberToCheck
 * @returns {boolean} true se pari, false se dispari
 */

function isEven(numberToCheck) {
    const result = numberToCheck % 2 === 0;
    return result;
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