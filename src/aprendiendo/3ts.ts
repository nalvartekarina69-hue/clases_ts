let usuario: [string, number, boolean];
usuario=["Juan",25,true];

let usuario2: [string, number, boolean?];
usuario2=["Juan",25];

let usuario3: [string, boolean, ...number[]]; // ... indica que hay un numero infintito que puede entrar al array
usuario3=["Juan",true, 25];

type user=[string, boolean, ...number[]];   //se puede colocar en cualquier posicion
let usuario4:user =["Juan",true, 25];

type user2=[string, ...boolean[], number];
let usuario5:user2=["Juan",true,false, 25];

let nombre:string[] =["Juan", "Pedro"]
let nombres:readonly string[] =["Juan", "Pedro"] //convierta la variable en una constante, no se puede modificar
nombre.push("Susan")
console.log(nombre)

type array = Readonly<string[]>;   //otra forma de hacer
type array2 = Readonly<[string,number]>; 
let array3= ["lina",14];

type valores = "alto"|"bajo"|"medio";

enum valores1{
    Alto,
    Medio,
    Bajo
}
enum valores2{ // el indice aumenta desde donde lo colocas
    Alto=2,
    Medio,
    Bajo
}

export enum valores3{ // export para usar en otro documento
    Alto="admin",
    Medio="geren",
    Bajo="opera"
};
console.log(valores3.Alto);

type Empleado ={
    nombre:string,
    apellido: string,
    cargo: valores3
}
const empleado1: Empleado ={
    nombre:"juan",
    apellido: "luis",
    cargo: valores3.Alto
}
console.log(empleado1);