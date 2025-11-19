//permite exportar 
export class Negociacao {
//tralha (#) representa os modificadores de acesso (private, public e protected)
    private _data;
    private _quantidade;
    private _valor;

    constructor(data: Date,quantidade: number,valor: number) {
        this._data = data
        this._quantidade = quantidade 
        this._valor = valor
    }

    get getData(): Date {
        return this._data;
    }

    get getQuantidade(): number {
        return this._quantidade
    }

    get getValor(): number{
        return this._valor

    }

    get getVolume(): number {
        return this._quantidade * this._valor
    }

    // set data(data) {
    //   this.#data = data
    // }

    //  set quantidade(quantidade) {
    //   this.#quantidade = quantidade
    // }

    //  set valor(valor) {
    //   this.#valor = valor
    // }
}
 