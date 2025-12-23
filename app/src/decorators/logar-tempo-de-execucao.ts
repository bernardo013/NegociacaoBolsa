export function logarTempoDeExecucao(emSegundos: boolean){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ){
        const metodoOriginal = descriptor.value;
        //modifica o método original
        //...args: Array<any> significa que o argumento passado será um array de qualquer tipo.
        descriptor.value = function(...args: any[]){            
            const {divisor, unidade} = defineTempo();
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            const tempo = ((t2 - t1)/divisor).toFixed(5)
            console.log(`O método ${propertyKey} demorou ${divisor} ${unidade} para ser executado.`);
            return retorno;
        }
        return descriptor



    // Função que define o tempo em segundos ou milisegundos dependendo do parâmetro ser true ou false
      function defineTempo() {
            if(emSegundos) {
                return {divisor: 1000, unidade: 'segundos'};
            } else {
                return {divisor: 1, unidade: 'milisegundos'};
            }
        }
    }
}
