/* Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto{
    #codigo
    #nombre
    #precio
    constructor(codigoParam, nombreParam, precioParam) {
        this.#codigo = codigoParam;
        this.#nombre = nombreParam;
        this.#precio = precioParam;
    }

    imprimeDatos(){
        document.writeln(`<br>Codigo del producto: ${this.#codigo} / Nombre del producto: ${this.#nombre} / Precio del producto: ${this.#precio}`)
    }
}

const producto1 = new Producto('E429', 'Smartphone', '$' + 300000);
const producto2 = new Producto('T300', 'Teclado', '$' + 48000);
const producto3 = new Producto('G120', 'Monitor', '$' + 325000);

const productos = [producto1, producto2, producto3];

productos.forEach(producto => producto.imprimeDatos())