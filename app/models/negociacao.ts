//permite exportar 
export class Negociacao {
//tralha (#) representa os modificadores de acesso (private, public e protected)
    #data;
    #quantidade;
    #valor;

    constructor(data,quantidade,valor) {
        this.#data = data
        this.#quantidade = quantidade 
        this.#valor = valor
    }

    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade
    }

    get valor(){
        return this.#valor

    }

    // set data(data) {
    //  return this.#data = data
    // }

    //  set quantidade(quantidade) {
    //  return this.#quantidade = quantidade
    // }

    //  set valor(valor) {
    //  return this.#valor = valor
    // }
}
 