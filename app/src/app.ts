import { NegociacaoController } from './controllers/negociacao-controller.js'
import { negociacoesView } from './views/negociacoes-view.js';

const negociacaoController = new NegociacaoController();
const form = document.querySelector('.form')
if(form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        negociacaoController.adiciona();
    })
} else {
    throw Error("Não foi possível iniciar a aplicação")
}

const botaoImporta = document.querySelector('#botao-importa')
if(botaoImporta) {
    botaoImporta.addEventListener('click', () => { negociacaoController.importaDados() })
} else {
    throw Error("botão importa não encontrado!")
}
