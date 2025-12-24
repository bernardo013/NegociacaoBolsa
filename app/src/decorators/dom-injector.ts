//Decorator de propriedades.
export function domInjector(seletor: string) {
    return function(
        //se a classe for estática ele retorna o construtor, se não for retorno o prototype.
        target: any,
        propertyKey: string,
    ) {
        console.log(`modificando o prototype ${target.constructor.name} 
            e adicionando getter para a propriedade ${propertyKey}`)

        const getter = function() {    
            const elemento = document.querySelector(seletor)
            console.log(`buscando elemento do DOM ${seletor} para injetar em ${propertyKey}`)
            return elemento
        }
         Object.defineProperty(
            target,
            propertyKey,
         { get: getter }
        )
    }

}