import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { negociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes;
  private NegociacoesView = new negociacoesView('#negociacoesView')
  private mensagemView = new MensagemView("#mensagemView")

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.NegociacoesView.update(this.negociacoes)
  }

  //FAZ O FLUXO DO PROGRAMA
  // Lê os inputs do HTML
  // Converte esses valores para os tipos corretos
  // Cria um objeto Negociacao
  // Chama o adiciona() da classe Negociações
  //exibe a lista com método lista() do tipo readOnlyArray.
  // Limpa o formulário
  adiciona(): void {
    const negociacao = this.criaNegocicao();
    this.negociacoes.adiciona(negociacao);
    this.NegociacoesView.update(this.negociacoes)
    this.mensagemView.update('Negociacão adicionada com sucesso!!')
    this.limparForm();    
  }

  criaNegocicao(): Negociacao {
    //expressaõ regular que seleciona "-" e /g para indicar global ou seja todas "-";
    const exp = /-/g;
    //convertendo dados de entrada.
    const data = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
  

    //passando para o construtor.
    return new Negociacao(data, quantidade, valor);
  }

  limparForm():void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''
    this.inputData.focus();
  }
}
