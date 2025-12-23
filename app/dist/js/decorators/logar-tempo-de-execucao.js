export function logarTempoDeExecucao(emSegundos) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const { divisor, unidade } = defineTempo();
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            const tempo = ((t2 - t1) / divisor).toFixed(5);
            console.log(`O método ${propertyKey} demorou ${divisor} ${unidade} para ser executado.`);
            return retorno;
        };
        return descriptor;
        function defineTempo() {
            if (emSegundos) {
                return { divisor: 1000, unidade: 'segundos' };
            }
            else {
                return { divisor: 1, unidade: 'milisegundos' };
            }
        }
    };
}
