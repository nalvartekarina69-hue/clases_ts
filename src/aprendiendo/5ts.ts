// todo async devuelve un await
async function prueba2():Promise<String>{
return "hola"
} //espera que suceda añgp para que funcione
 function prueba(){
    return "hola"
 } //debes llamarlo para que suceda

 const function_flecha = async(): Promise<any>=>{
    return "Hola"
 } // las funciones asincronas pueden ser funciones de flecha

async function suma(n1:number, n2:number): Promise<Number>{
    return Promise.resolve(15)
} // las funciones asincronas pueden recibir parametros, Resolve: le dan un valor a la promesa para que sea devuelta 

