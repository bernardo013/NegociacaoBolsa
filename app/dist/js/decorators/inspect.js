export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`O Método---> ${propertyKey}()`);
        console.log(`Parâmetro ---> ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`Retorno ---> ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
