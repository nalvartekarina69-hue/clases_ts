const carreras : string[] =['contabilidad','administracion','inge']

interface Estudiante{
    name:String,
    apellido:String,
    direcciones:String[],
    edad?:number
    carrera: 'contabilidad'|'administracion'|'inge'
}
type estudiante ={
    name:String,
    apellido:String,
    direcciones:String[],
    edad?:number
}

const estudiante1:Estudiante={
    name:"Juan",
    apellido:"lopes",
    direcciones:["jr. manoc","av. independecia"],
    edad:25,
    carrera:"administracion"
}   // let puedes agregar atributos a Estudiante, const no puedes modificar
estudiante1.name = "Isabel"
console.table(estudiante1)

type autor ={
    name:string,
    age:number,
    email:string,
    readonly type: "extranjero"|"nacional" //solo de lectua np se puede modificar
}

type capitulos={
    name: string,
    date:Date
}
type volumenes={
    [keyof:string]:capitulos, //se puede crear varia veces con distinto nombre

}
type libro={
    titulo:string,
    contenido:string,
    fecha:Date,
    autor:autor,
    volumenes:volumenes,
    categoria?:string
}               // un tipo a partir de otro tipo
let libro1:libro={
    titulo:"El mundo",
    contenido:"ds tiene 7 capitulos",
    fecha: new Date(),
    autor:{
        name:"juan",
        age: 25,
        email:"juan@gmail.com",
        type:"extranjero"
    },
    volumenes: {
        Volumen1:{
            name:"primer capitulo",
            date: new Date()
        },
        Volumen2:{
            name:"segundo capitulo",
            date: new Date()
        },
        Volumen3:{
            name:"tercer capitulo",
            date: new Date()
        }
    }
}

libro1.titulo="el mundo de typescript"
libro1.volumenes.Volumen1.name="capitulos 1-5"
console.table(libro1)


type gato = {
    nombre:string,
    vidas:number,

}
type perro={
    nombre:string,
    patas:number
}
type animal_generico= gato|perro // union de tipos 

let perro1: animal_generico={
    nombre:"tobi",
    patas:4
}


type loading={
    state: "loading",

}
type success={
    state: "success",
    respuesta: {
        titulo:string,
        duracion: number,
        descripcion:string
    }
}
type failed ={
    state:"failed",
    codigo: number,
}
type estados= success|loading|failed

function validarEstado(estado:estados):string{
    switch(estado.state){
        case "loading": 
            return "iniciando proceso";
        case "failed":
            return `Error numero ${estado.codigo}`;
        case "success":
            return `Descargando imagen ${estado.respuesta.titulo}-${estado.respuesta.descripcion}`
        }

    }

let estado_enviado:estados ={
    state:"loading"
}
console.log(validarEstado(estado_enviado))

type gato1 = {
    nombre:string,
    vidas:number,

}
type perro1={
    nombre:string,
    patas:number
}

type animales= gato1 & perro1

const animal:animales={
    nombre:"flor",
    vidas:3,
    patas:4
}


//ejercicio


type cursos={
    nombre:string,
    tipo?:"programacion"|"básico"
}

type semestre={
    [keyof:string]:cursos
}
type sem={
    [keyof:string]:semestre
}
type trabajo={
    [keyof:string]:string
}

type estudiantes={
    nombre:string,
    apellido:string,
    edad: number,
    carrera: "Ing de software"|"Administracion",
    lenguaje: string[],
    Semestre: sem,
    fecha_inicio:Date,
    direcciones:string[],
    trabajos: trabajo
}


let estudiante2:estudiantes={
    nombre:"Juan",
    apellido: "Suarez",
    edad:25,
    carrera:"Ing de software",
    lenguaje:["Java","Python","Javascript"],
    Semestre: {
        VI:{
            cursos:{
                nombre:"Lenguaje de programacion",
                tipo: "programacion"
            }
        },
        V:{
            cursos: {
                nombre:"Desarrollo humano"
            }
        }
    },
    fecha_inicio: new Date,
    direcciones: ["Direccion1","Direccion2"],
    trabajos:{
        trabajo1: "libreria",
        trabajo2: "colegio",
        trabajo3: "restaurant",
    }
}


//
