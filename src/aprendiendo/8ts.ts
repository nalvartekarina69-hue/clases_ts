export interface Producto{
    descripcion: string,
    precio: number,

}

interface Calcular{
    calculo: number,
    productos: Producto[]
}

export function calculadora(opciones: Calcular):[number,number]{
    const {calculo,productos} = opciones;
    let total=0;

    productos.forEach(({precio})=>{
        total += precio;
    });
    return [total, total*calculo]
}