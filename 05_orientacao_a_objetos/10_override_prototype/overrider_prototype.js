//Sempre que adicionamos uma propriedade a um objeto, é criada uma idêntida no prototype;
//Podemos substituir a do prototype;

class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}


Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 4, 'Amarelo');

console.log(labrador.patas);

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);