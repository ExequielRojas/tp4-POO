//Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 

class Animal{
    #nombre;
    #edad;
    constructor(nombreParam, edadParam){
        this.#nombre = nombreParam;
        this.#edad = edadParam;
    }

    emitirSonido(){
        alert(`Este animal emite un sonido...`)
    }

    get getNombre() {
        return this.#nombre;
      }
      
    get getEdad() {
        return this.#edad;
    }

}

class Perro extends Animal{
    #sonido
    constructor(nombreParam, edadParam){
        super(nombreParam, edadParam);
        this.#sonido = 'guau';
    }

    emitirSonido(){
        alert(`${this.getNombre} de (${this.getEdad} años) dice: ${this.#sonido}!`);
    }
}

class Gato extends Animal{
    #sonido
    constructor(nombreParam, edadParam){
        super(nombreParam, edadParam);
        this.#sonido = 'miau';
    }

    emitirSonido(){
        alert(`${this.getNombre} de (${this.getEdad} años) dice: ${this.#sonido}!`);
    }
}

const perroLadra = new Perro('Rocko', 7);
const gatoMaulla = new Gato('Mimi', 3);

perroLadra.emitirSonido();
gatoMaulla.emitirSonido();