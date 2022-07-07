let nome = 'Jamal';
let anoNasc = 2020;
let diaNasc = 14;
let mesNasc = 2;

if (mesNasc < 10) {
    let novoMes = '0'+ mesNasc
    console.log('O '+ nome + ' nasceu em ' + diaNasc + ' / ' + novoMes + ' / ' + anoNasc);
}else {
    console.log('O '+ nome + ' nasceu em ' + diaNasc + ' / ' + mesNasc + ' / ' + anoNasc);
}
