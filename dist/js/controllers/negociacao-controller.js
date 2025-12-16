import { DiaDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { negociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.NegociacoesView = new negociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.NegociacoesView.update(this.negociacoes);
    }
    //FAZ O FLUXO DO PROGRAMA
    // Lê os inputs do HTML
    // Converte esses valores para os tipos corretos
    // Cria um objeto Negociacao
    // Chama o adiciona() da classe Negociações
    //exibe a lista com método lista() do tipo readOnlyArray.
    // Limpa o formulário
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.diaUtil(negociacao.data)) {
            this.mensagemView.update("apenas negociações em dias úteis são aceitas!");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparForm();
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    diaUtil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
    atualizaView() {
        this.NegociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociacão adicionada com sucesso!!');
    }
}
