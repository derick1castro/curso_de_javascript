// Construtores são formas de instanciar uma classe em uma linguagem de programação;
// Instanciar = criar um objeto NavigationPreloadManager;
// No construtor já podemos definir propriedades;

function criaCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'preta');

console.log(doberman);