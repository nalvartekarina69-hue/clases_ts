// Destructuración
interface Reproductor{
    volumen: number;
    tiempo: number,
    titulo_cancion: string,
    detalles:Detalles
}

interface Detalles{
    autor: string,
    año: number,
}

const cancion1: Reproductor={
    volumen: 90,
    tiempo: 60,
    titulo_cancion: "Olas",
    detalles:{
        autor:"Pedro",
         año: 1995
    }
}

const nuevo_titulo = "Nuevo titulo"

// desestructuracion, ya no se usa this para extraer los datos de los atributos de la interface
const {titulo_cancion, tiempo, detalles } = cancion1;
// se extrae autor porque detalles tiene otros atributos
const {autor} = detalles