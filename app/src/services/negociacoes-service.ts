import { NegociacaoDoDia } from "../interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService {
    public obterNegociacao(): Promise<Negociacao[]> {
// Usamos o fetch para fazer uma requisição HTTP para a URL que retorna os dados.
//O primeiro .then recebe o objeto Response e converte o corpo da resposta para JSON.
//O segundo .then tipa esse JSON como um array de NegociacaoDoDia (apenas para o TypeScript) e transforma cada objeto cru em uma instância da classe Negociacao.
//O último .then percorre o array de negociações criadas e adiciona cada uma na coleção this.negociacoes usando o método adiciona.
           return fetch("http://localhost:8080/dados")
              .then(res => res.json())
              .then((dados: NegociacaoDoDia[]) => {
                return dados.map(dadoDeHoje => {
                  return new Negociacao(
                    new Date(),
                   dadoDeHoje.vezes, 
                   dadoDeHoje.montante
                  )
                })
              })
    }
}