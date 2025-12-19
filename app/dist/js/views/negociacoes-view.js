import { View } from "./view.js";
export class negociacoesView extends View {
    template(model) {
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
                        `;
        })}
            </tbody>
        </table>
        `;
    }
    formata(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}
