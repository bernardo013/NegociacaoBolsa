import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
     protected elemento: HTMLElement;
     private escapar = false;
    
     //torna opicional o parâmetro escapar.
    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor)
        //verifica se o nosso elemento exitir garantimos que ele não será nulo forçando que sera um HTMLElement
        if(elemento) {
            this.elemento = elemento as HTMLElement
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM`)
        }
        
        if(escapar) {
            this.escapar = escapar
        }
    }

    // não preciso de () pois não possui parâmetros
    @inspect
     update(model: T): void {
        let template = this.template(model)
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }

        this.elemento.innerHTML = template
    }

    protected abstract template(model: T): string
}