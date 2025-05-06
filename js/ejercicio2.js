/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

 */

class CuentaBancaria{
    #titular;
    #saldo;
    constructor(){
        this.#titular = 'Alex';
        this.#saldo = 0;
    }

    ingresar(cantidad){
        this.#saldo += cantidad
    }
    extraer(cantidad){
        if(cantidad > this.#saldo){
            alert('Saldo insuficiente')
        } else {
            this.#saldo -= cantidad;
        }
    }
    informar(){
        return `El usuario: ${this.#titular} tiene el monto de $${this.#saldo} disponible`
    }
}

const cuenta = new CuentaBancaria();

do{
    const opciones = parseInt(prompt('Bienvenido! ' + 'Para poder acceder a nuestras funciones debe escribir el numero correspondiente a la opcion: 1- Consultar estado de cuenta, 2- Ingresar dinero, 3- Extraer dinero'))

    switch(opciones){
        case 1:
            alert(cuenta.informar());
            break;
        case 2:
            const montoIngreso = parseFloat(prompt("Ingrese el monto que desea depositar:"))
            if(isNaN(montoIngreso) || montoIngreso <= 0){
                alert('Monto invalido')
            } else {
                cuenta.ingresar(montoIngreso);
                alert('Deposito realizado con exito');
            }
            break;
        case 3:
            const montoExtraer = parseFloat(prompt("Ingrese el monto que desea extraer:"))
            if (isNaN(montoExtraer) || montoExtraer <= 0) {
                alert("Monto inválido.");
            } else {
                cuenta.extraer(montoExtraer);
                alert('Extraccion realizado con exito');
            }
            break;
        default:
            alert('Opcion no valida. Intente de nuevo.')
    }

}while(confirm("¿Desea realizar otra operacion?"))