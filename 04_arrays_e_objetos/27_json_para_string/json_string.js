//  PODEMOS CONVERTER O JSON PARA UMA STRING DE FORMA FÁCIL;
// OU TAMBÉM UMA STRING PARA JSON.

let pessoa = {
    "nome": "Derick",
    "idade": 26,
    "profissao": "Programador",
    "hobbies": ["video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);