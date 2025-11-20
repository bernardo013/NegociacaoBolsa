import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    //FAZ O FLUXO DO PROGRAMA
    // Lê os inputs do HTML
    // Converte esses valores para os tipos corretos
    // Cria um objeto Negociacao
    // Chama o adiciona() da classe Negociações
    //exibe a lista com método lista() do tipo readOnlyArray.
    // Limpa o formulário
    adiciona() {
        const negociacao = this.criaNegocicao();
        this.negociacoes.adiciona(negociacao);
        const negociacoes = this.negociacoes.lista();
        console.log(negociacoes);
        this.limparForm();
    }
    criaNegocicao() {
        //expressaõ regular que seleciona "-" e /g para indicar global ou seja todas "-";
        const exp = /-/g;
        //convertendo dados de entrada.
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        //passando para o construtor.
        return new Negociacao(data, quantidade, valor);
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
