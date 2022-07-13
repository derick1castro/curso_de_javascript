//  MÉTODOS DE STRING - JOIN = JUNTA ELEMENTOS EM UM ARRAY EM UMA FRASE, POR MEIO DE UM SEPARADOR;

let frase = "Testando o método split";

let palavras = frase.split(" ");

let novaFrase = palavras.join("@");

console.log(novaFrase);