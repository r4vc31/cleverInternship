/**
 * 1. Suma de digitos
 */
function digitsSum(inputInt){
    let suma = 0;
    let numbers = [];
    inputInt.split("").forEach( (digit) => numbers.push(parseInt(digit)));
    numbers.forEach(number => suma += number);
    return suma;
}
// Casos de ejemplo
console.log(digitsSum("999"));
console.log(digitsSum("9184501"));
console.log(digitsSum("12345"));

/**
 * 2. Palíndromos
 */
function isPalindrome(inputStr){
    return inputStr == inputStr.split("").reverse().join("");
}
// Casos de ejemplo
console.log(isPalindrome("aabaa"));
console.log(isPalindrome("abac"));
console.log(isPalindrome("salas"));

/**
 * 3. Producto de elementos adyacentes
 */
function maxAdjacentProd(inputArray){
    let max = -Infinity;
    for (let index = 0; index < inputArray.length - 1; index++) {
        let adjacentProd = inputArray[index]*inputArray[index+1];
        if (adjacentProd > max){
            max = adjacentProd;
        }
    }        
    return max;
}
// Casos de ejemplo
console.log(maxAdjacentProd([3, 6, -2, -5, 7, 3]))
console.log(maxAdjacentProd([5, 1, 2, 3, 1, 4]))
console.log(maxAdjacentProd([-23, 4, -3, 8, -12]))