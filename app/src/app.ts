import { NegociacaoController } from './controllers/negociacao-controller.js'
import { negociacoesView } from './views/negociacoes-view.js';

const negociacaoController = new NegociacaoController();
const form = document.querySelector('.form')
if(form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        negociacaoController.adiciona();
    })
}
