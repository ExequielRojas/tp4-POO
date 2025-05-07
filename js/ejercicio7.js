/*Nos piden realizar una agenda telefónica de contactos.
 
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
 
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
 
Los métodos de la agenda serán los siguientes:
 
● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.

● existeContacto(Contacto): indica si el contacto pasado existe o no.

● listarContactos(): Lista toda la agenda

● buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.

● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla

● agendaLlena(): indica si la agenda está llena.

● huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola. 
 */

class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }

  get getNombre() {
    return this.#nombre;
  }

  set setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get getTelefono() {
    return this.#telefono;
  }

  set setTelefono(nuevoTelefono) {
    this.#telefono = nuevoTelefono;
  }

  mostrarContacto() {
    document.writeln(
      `<p>Nombre: ${this.getNombre}, Telefono: ${this.getTelefono}</p>`
    );
  }
}

class Agenda {
  #contactos;
  #tamanio;
  constructor(tamanio = 10) {
    this.#contactos = [];
    this.#tamanio = tamanio;
  }

  get getContactos() {
    return this.#contactos;
  }

  get getTamanio() {
    return this.#tamanio;
  }

  set setTamanio(nuevoTamanio) {
    this.#tamanio = nuevoTamanio;
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      alert("Agenda llena, no se puede añadir más contactos.");
      return;
    }
    if (this.existeContacto(contacto)) {
      alert("Contacto ya existente.");
    } else {
      this.#contactos.push(contacto);
      alert("Contacto añadido correctamente.");
    }
  }

  existeContacto(contacto) {
    return this.#contactos.some(
      (contactoAniadido) =>
        contactoAniadido.getNombre().toLowerCase() ===
        contacto.getNombre().toLowerCase()
    );
  }

  listarContactos() {
    console.log("Lista de contactos:");
    this.#contactos.forEach((contactoAniadido) =>
      contactoAniadido.mostrarContacto()
    );
  }

  buscarContacto(nombre) {
    const contacto = this.#contactos.find(
      (contactoAniadido) =>
        contactoAniadido.getNombre().toLowerCase() === nombre.toLowerCase()
    );
    if (contacto) {
      alert(`Teléfono de ${nombre}: ${contacto.getTelefono()}`);
    } else {
      alert("Contacto no encontrado.");
    }
  }

  eliminarContacto(nombre) {
    const index = this.#contactos.findIndex(
      (contactoAniadido) =>
        contactoAniadido.getNombre().toLowerCase() === nombre.toLowerCase()
    );
    if (index !== -1) {
      this.#contactos.splice(index, 1);
      alert("Contacto eliminado correctamente.");
    } else {
      alert("Contacto no encontrado.");
    }
  }

  agendaLlena() {
    return this.#contactos.length >= this.#tamanio;
  }

  huecosLibres() {
    return this.#tamanio - this.#contactos.length;
  }
}

const capacidadAgenda = parseInt(prompt("Ingresa el tamaño de la agenda"));
const agendaNueva = new Agenda(capacidadAgenda || 10);

console.log(agendaNueva);

do {
  const opcion = parseInt(
    prompt(`Seleciona una opcion:
        1- Añadir contacto,
        2- Eliminar contacto,
        3- Listar contactos
        4 - Buscar contacto
        5 - Ver si agenda está llena
        6 - Ver huecos libres`)
  );

  switch (opcion) {
    case 1:
      const nombre = prompt("Ingrese el nombre del contacto");
      const telefono = prompt("Ingrese el teléfono del contacto");
      const nuevoContacto = new Contacto(nombre, telefono);
      agendaNueva.aniadirContacto(nuevoContacto);
      break;
    case 2:
      const nombreEliminar = prompt(
        "Ingrese el nombre del contacto a eliminar"
      );
      agendaNueva.eliminarContacto(nombreEliminar);
      break;
    case 3:
      agendaNueva.listarContactos();
      break;
    case 4:
      const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar");
      agendaNueva.buscarContacto(nombreBuscar);
      break;
    case 5:
      alert(
        agendaNueva.agendaLlena()
          ? "La agenda está llena."
          : "La agenda tiene espacio."
      );
      break;
    case 6:
      alert(`Huecos disponibles: ${agendaNueva.huecosLibres()}`);
      break;
    default:
      alert("Opción no válida.");
  }
} while (confirm("Quieres agregar un nuevo contacto?"));