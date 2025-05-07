//Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona{
    #nombre;
    #edad;
    #profesion;
    constructor(nombreParam, edadParam, profesionParam){
        this.#nombre = nombreParam;
        this.#edad = edadParam;
        this.#profesion = profesionParam;
    }

    saludar(){
        alert(`Saludos! Mi nombre es ${this.#nombre} de ${this.#edad} edad y ${this.#profesion} de profesion`);
    }

    despedirse(){
        alert(`Hasta luego! ${this.#nombre}`);
    }
}

const persona1 = new Persona("Melanie", 30, "Ingeniera");
const persona2 = new Persona("Carlos", 45, "Profesor");

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();