// genericos

export function mifunction<T>(argumento: T){
    return argumento
}

const tipo_string = mifunction<string>('Hola')


console.log(tipo_string)