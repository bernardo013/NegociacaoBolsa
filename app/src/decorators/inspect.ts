// não precisa retornar uma função, pois não vai passar parâmetros
export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`O Método---> ${propertyKey}()`)
        console.log(`Parâmetro ---> ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args);
        console.log(`Retorno ---> ${JSON.stringify(retorno)}`)
        return retorno;
    }
    return descriptor;
}



