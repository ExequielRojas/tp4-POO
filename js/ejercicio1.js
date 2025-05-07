//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    color: 'Rojo',
    marca: 'Fiat',
    modelo: 'Cronos',

    encendido: function (){
        document.writeln(`<p>El auto ${this.marca}, ${this.modelo} esta encendido</p>`)
    },

    apagado: function (){
        document.writeln(`<p>El auto ${this.marca}, ${this.modelo} esta apagado</p>`)
    }
}

auto.encendido();
auto.apagado();