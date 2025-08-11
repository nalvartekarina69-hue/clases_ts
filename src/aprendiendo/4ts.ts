//funcion en javascript
function suma(){
    console.log("Hola mundo")
}

suma();
// funcion sin parametros en type script
function suma2():string{
   return "Hola mundo"
}
console.log(suma2());
// funcion con parametros y tipo de retorno
function suma3(a:number):number{
    return a
}
console.log(suma3(4));
// funcion con 2 parametros y tipo de retorno
function suma4(a:number,b:number):number{
    return a+b
}
console.log(suma4(4,5));

const resultado = (a:number,b:number):number=>{  // contante ocupa menos espacio
    return a+b
}
console.log(resultado(4,6))

interface Estudiante{
    nombre:string,
    apellido:string,
    edad:number,
    function: ()=>void,    
    
}

const funcion1= (estudiante:Estudiante, a:number) =>{
    estudiante.edad += a
}

const estudiante25:Estudiante={
    nombre:"luisa",
    apellido:"jorge",
    edad: 25,
    function(){
        console.log(`La nueva edad es ${this.edad}`)
    }
}
funcion1(estudiante25,4)

estudiante25.function()

