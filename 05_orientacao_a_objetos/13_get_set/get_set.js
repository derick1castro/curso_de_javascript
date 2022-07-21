// GET: Serve para resgatar o valor de uma propriedade;
// SET: Serve para alterar o valor de uma propriedade;

class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
    
    latir() {
        console.log("Au au");
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }
}

let pastor = new Cachorro('Pastor Alemão', 'Sem cor');

console.log(pastor);

pastor.setCor = 'Marrom';

console.log(pastor.getCor);

