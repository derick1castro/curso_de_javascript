// PROPRIEDADES QUE SERVEM COMO FUNÇÕES;
// OU SEJA, AS AÇÕES DOS OBJETOS;
// INVOCAMOS OS MÉTODOS DA MESMA MANEIRA QUE FUNÇÕES.

const cachorro = {
    uivar: function() {
        console.log("auuuu");
    },
    rosnar: function() {
        console.log("grrrr")
    }
}

cachorro.uivar();
cachorro.rosnar();
