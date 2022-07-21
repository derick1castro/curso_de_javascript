// UM OBJETO FALLBACK DE OUTRO OBJETO;
// QUANDO UM OBJETO RECEBE UMA REQUISIÇÃO DE UMA PROPRIEDADE QUE NÃO TEM, ELA É PROCURADA NO PROTOTYPE  DESTE OBJETO;
// O PROTOTYPE DE UM OJETO CRIADO DO ZERO É O OBJECT, QUE TEM OS MÉTODOS NATIVOS DA LINGUAGEM.

const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);