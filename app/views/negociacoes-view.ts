import { Negociacoes } from "../models/negociacoes.js"
import { View } from "./view.js"

export class negociacoesView extends View<Negociacoes>{
   

    protected template(model: Negociacoes): string {
        return `
        <table class="table table=hover table=bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
                </tr>
            </thead>
            <tbody> 
                ${model.lista().map(negociacao => {
                        return `
                    <tr>
                        <td>${this.formata(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                        `
                })}
            </tbody>
        </table>
        `
    }

    private formata(data: Date){
       return new Intl.DateTimeFormat()
       .format(data)
    }
}