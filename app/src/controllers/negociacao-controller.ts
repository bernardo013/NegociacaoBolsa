import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiaDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { negociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes;
  private NegociacoesView = new negociacoesView("#negociacoesView", true)
  private mensagemView = new MensagemView("#mensagemView")

  constructor() {
    //garante que o que vai ser passado vai ser um HTMLInputElement, pois definimos que o input pode ou não ser null: "HTMLInputElement | null"
    this.inputData = document.querySelector("#data") as HTMLInputElement;
    this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
    this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.NegociacoesView.update(this.negociacoes)
  }



// Adiciona o decorator para medir o tempo de execução do método 
//escolhe se é em segundos (true) ou milisegundos (false)
  @logarTempoDeExecucao(true)
  @inspect()
  public adiciona(): void {
  //FAZ O FLUXO DO PROGRAMA
  // a função criaDe() vindo da classe Negociacao, onverte esses valores para os tipos corretos
  // Cria um objeto Negociacao
  // chama o método adiciona() do objeto negociacoes para adicionar a nova negociação em um array privado
  // Limpa o formulário
    const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
      if(!this.diaUtil(negociacao.data)){
          this.mensagemView.update("apenas negociações em dias úteis são aceitas!")
            return
      }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView()
        this.limparForm();
  }
  
  private limparForm():void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''
    this.inputData.focus();
  }

  private diaUtil(data: Date){
    return data.getDay()> DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO
  }

  private atualizaView(): void {
    this.NegociacoesView.update(this.negociacoes)
    this.mensagemView.update('Negociacão adicionada com sucesso!!')
  }
}
