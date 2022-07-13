// UMA FORMA DE UMA FUNÇÃO RECEBER INDEFINIDOS PARÂMETROS;
// O OPERADOR REST VAI VIRAR UM ARRAY;
// O PARÂMETRO É DEFINIDO POR: ...NOME.


let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num, num1, num2);
console.log('pausa');
imprimirNumeros(num2, num3);
console.log('pausa');
imprimirNumeros( 2, 5, 6, 7, 8, 2, 4, 5, 6, 7, 8, 9);