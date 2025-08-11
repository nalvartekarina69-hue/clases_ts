import {calculadora, Producto} from './8ts'

const carrito: Producto[] =[
    {
        descripcion: "Coca-cola",
        precio: 2.60
    },
    {
        descripcion: "Inka-cola",
        precio: 2.50
    },
    {
        descripcion: "Coca-cola",
        precio: 2.60
    }
]

const [total, calculo] = calculadora({
    productos: carrito,
    calculo: 0.18
})
console.log("Total: ",total);
console.log("calculo: ", calculo)