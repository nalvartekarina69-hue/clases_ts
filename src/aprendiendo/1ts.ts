//variable y constantes

//var -> no se debe utiñizar
// let se puede modificar
// const no se puede modificar
//JS
let nombre ="Juan"

const apellido = "Suarez";
console.log(nombre,apellido)
//ts
let nombre1 : String ="Juan"

const apellido1 : String = "Suarez";
console.log(nombre1,apellido1)

let cantidad: number=256;  //dato primitivo
let cantidad2: Number=256; //interface
let precio : String= "Hola";

let producto: String | "defecto" = "Sofa"; //poner un valor por defecto
let name: String|Number = 25;
 
producto = "silla";

let carrera : "administracion"|"contabilidad" // : limitar la variable

let isFalse: Boolean = true;

isFalse = false;

console.log({producto,precio,name})
console.log(producto,precio,name)

//crear mi tipo de dato
type Juanito ="alto"|"medio"|"bajo";
let dato :Juanito = "medio";

let dato1 :undefined; // dato no definido

let dato2 :null;
let dato3 =" ";


if (dato1=== dato3){
    console.log("Iguales")
}

function validar (numero2:unknown ){ // unknown: solo se usa cuando necesitas verificar el valor de tipo de dato
    if( typeof numero2=== "number"){
        return console.log(numero2*2)
    }else{
         return console.log("por favor ingresa un numero") //con console si se muestra el mensaje
    }
}
validar(5)
validar("hola")


type fecha =Date;
type cadenas = String;
type pedrito= cadenas extends String ? true:false;

let juancito : pedrito = true // solo recibe true o false porque se hizo la condicional anteriormente

let datos: Object={
    nombre: "Juan",
    apellido: "Suarez"
}
let datos2:Object= ["25",25,true]


type estudia = {
    nombre: string,
    apellido: string,
    edad: number
}
let estudiante : estudia= {
    nombre:"Juan",
    apellido: "Suarez",
    edad:25
}

let myfunction: Function =(nombre:string) => {
    console.log("Hola mmundo "+ nombre)
};

myfunction(25);

let cadenas =  "Hola mundo"; //valida el tipo de dato
let cadenas2 ="hola mundo" as String;  // valida tipo de dato , si no es no lo pone

type user={
    nombre: String,
    apellido: String,
}
let usuario={
    nombre:"Juan",
    apellido: "Suarez",
}
function prueba(){
    return console.log(usuario as user)
}
prueba();

let array : Object=[1,2,3]
let array2: [] = [] //para array


let objeto:{}={         //para objetos
    nombre:String
}

type autor = {
    nombre:String,
    apellido: String,
    edad?:Number        //?es un atribituo que indica que puede ir o no el dato
}

type libro={
    titulo:String,
    contenido: String,
    fecha:Date,
    autor: autor
}

let libro1={
    titulo:"php",
    contenido:"kdjsk sksjd",
    fecha: new Date(),
    autor: {
        nombre: "gabriel",
        apellido:"flores",
    }
}

