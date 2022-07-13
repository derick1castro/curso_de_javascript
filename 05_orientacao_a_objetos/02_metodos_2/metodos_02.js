// NORMALMENTE OS MÉTODOS INTERAGEM COM OS OBJETOS;
// ATÉ MUDANDO OS VALORES DAS SUAS PROPRIEDADES PARA CORRESPONDER A LÓGICA DO PROGRAMA DESENVOLVIDO.

const cachorro = {
    raca: 'SRD',
    uivar: function() {
        console.log("auuuu");
    },
    rosnar: function() {
        console.log("grrrr")
    }, 
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca:  function() {
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);

console.log(cachorro.getRaca());
