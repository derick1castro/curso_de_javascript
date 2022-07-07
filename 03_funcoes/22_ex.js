// function converterNumero(num) {
//     if (num < 0) {
//         let num2 = num * (-1);
//         console.log(`O positivo de ${num} é ${num2}`)
//     }
// }

// converterNumero(-25);

function converterNumero(numNegativo) {
    return Math.abs(numNegativo);
}

console.log(converterNumero(-13));
console.log(converterNumero(-3));
console.log(converterNumero(-31));