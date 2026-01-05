import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)

    }
    //ReadonlyArray(não permite que existam métodos fora de uma lista de apenas leitura)
    lista(): ReadonlyArray<Negociacao> {

        return this.negociacoes;


        //OUTRA MANEIRA DE FAZER É UTILIZANDO O SPREAD OPERATOR.
        // return [...this.negociacoes]
        //cria um array de arrays ex : [[data], [quantidade] ....]
        //fazendo assim com que não seja possível acessar o array original.
        
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2 )
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) == JSON.stringify(negociacoes.lista());
    }
}

