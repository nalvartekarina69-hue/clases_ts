// decoradores
function classDecorator< T extends {new (... args:any[]):{}}>(
    constructor:T 
){
    return class extends constructor{
        newProperty = "New property";
        hello = "override"
    }
};

@classDecorator
export class Ayacucho{
    public newPropety: string="Hola";
    print(){
        console.log("Hola mundo")
    }

}
console.log(Ayacucho);



const ciudad1= new Ayacucho();
console.log(ciudad1);