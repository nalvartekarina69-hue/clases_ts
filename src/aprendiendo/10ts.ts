//clases

export class Persona{
    constructor (
        public nombre: string,
        public apellido: string,
        private direccion: string = 'No tiene dirección'
    ){}
}

const persona1 = new Persona('Juan', 'Santiago')

console.log(persona1)