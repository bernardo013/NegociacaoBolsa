import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegocicao();
    console.log(negociacao)
    this.limparForm()
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
