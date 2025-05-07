// Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulos{
    #alto;
    #ancho;
    constructor (altoParam, anchoParam) {
        this.#alto = altoParam;
        this.#ancho = anchoParam;
    }

    get getAlto() {
        return this.#alto;
    }
    get getAncho() {
        return this.#ancho;
    }

    set setAlto(nuevaAltura){
        this.#alto = nuevaAltura
    }
    set setAncho(nuevaAnchura){
        this.#ancho = nuevaAnchura
    }

    mostrarRectangulo(){
        return `Rectángulo de alto ${this.#alto} y ancho ${this.#ancho}`;
    }

    calcularArea(){
        return this.#alto * this.#ancho;
    }

    calcularPerimetro() {
        return 2 * (this.#alto + this.#ancho);
    }
}

const datosRectangulo = new Rectangulos(10,5);

document.writeln(datosRectangulo.mostrarRectangulo());
document.writeln(`<br>El area del rectangulo calculado es: ${datosRectangulo.calcularArea()}`);
document.writeln(`<br>El perimetro del rectangulo calculado es: ${datosRectangulo.calcularPerimetro()}`);