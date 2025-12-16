//permite exportar 
export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
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
    //por ser estático o método pode ser acessado sem a classe ser instanciada.
    static criaDe(dataString, quantidadeString, valorString) {
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
