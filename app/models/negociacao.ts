//permite exportar 
export class Negociacao {
//tralha (#) representa os modificadores de acesso (private, public e protected)
    private _data;
    public  readonly quantidade
    public  readonly valor

    constructor(data: Date,quantidade: number,valor: number) {
        this._data = data
        this.quantidade = quantidade 
        this.valor = valor
    }

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor
    }

}
 