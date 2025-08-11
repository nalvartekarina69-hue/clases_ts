interface Estudiante{
    name: string,
    age:number,
    direccion: Direccion,
    ver_direccion: ()=>String,
 }
 interface Direccion{
    pais: string,
    departamento: string,
    ciudad: string
 }

const Estudiante1: Estudiante={
    name: "Juanito",
    age: 23,
    direccion:{
        pais:"Peru",
        departamento: "Ayacucho",
        ciudad:"Ayacucho"
    },
    ver_direccion(){
        return this.name + ',' + this.direccion.pais
    },
}

const direccion = Estudiante1.ver_direccion();
console.log(direccion)