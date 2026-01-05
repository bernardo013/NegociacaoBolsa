import { Imprimivel } from "../utils/imprimivel.js";
export class Negociacao extends Imprimivel {
    constructor(_data, quantidade, valor) {
        super();
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    paraTexto() {
        return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        valor: ${this.valor}
      `;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}
