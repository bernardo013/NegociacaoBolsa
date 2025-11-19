//permite exportar 
export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get getData() {
        return this._data;
    }
    get getQuantidade() {
        return this._quantidade;
    }
    get getValor() {
        return this._valor;
    }
    get getVolume() {
        return this._quantidade * this._valor;
    }
}
