/*
    1. Suma de digitos
*/
function digitsSum(inputInt){
    let suma = 0
    let numbers = []
    inputInt.split("").forEach( (digit) => numbers.push(parseInt(digit)))
    numbers.forEach(number => suma += number)
    return suma
}

// Casos de ejemplo
console.log(digitsSum("999"))
console.log(digitsSum("9184501"))
console.log(digitsSum("12345"))

