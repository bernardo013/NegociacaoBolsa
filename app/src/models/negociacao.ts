import { Imprimivel } from "../utils/imprimivel.js";

//permite exportar 
export class Negociacao extends Imprimivel {
//tralha (#) representa os modificadores de acesso (private, public e protected)
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) 
    {
       super();
    } 

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor
    }


public paraTexto(): string {
    return  `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        valor: ${this.valor}
      `
}

    //por ser estático o método pode ser acessado sem a classe ser instanciada.
 public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {

    //expressaõ regular que seleciona "-" e /g para indicar global ou seja todas "-";
    const exp = /-/g;
    //convertendo dados de entrada.
    const data = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    //passando para o construtor.
    return new Negociacao(data, quantidade, valor);
    }

}
 