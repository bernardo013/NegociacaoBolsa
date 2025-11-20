export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //ReadonlyArray(não permite que existam métodos fora de uma lista de apenas leitura)
    lista() {
        return this.negociacoes;
        //OUTRA MANEIRA DE FAZER É UTILIZANDO O SPREAD OPERATOR.
        // return [...this.negociacoes]
        //cria um array de arrays ex : [[data], [quantidade] ....]
        //fazendo assim com que não seja possível acessar o array original.
    }
}
