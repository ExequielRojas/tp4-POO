//Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.

let estudiantes = [];

function agregarEstudiante(nombre, nota, lista) {
    const estudiante = {
        nombre: nombre,
        nota: nota
    };
    lista.push(estudiante);
}

function calcularNotaMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i].nota;
    }
    return lista.length > 0 ? suma / lista.length : 0;
}

let continuar = true;

while (continuar) {
    let nombre = prompt("Ingrese el nombre del estudiante:");
    let nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:`));

    if (nombre && !isNaN(nota)) {
        agregarEstudiante(nombre, nota, estudiantes);
    } else {
        alert("Datos inválidos. Intenta de nuevo.");
    }

    continuar = confirm("¿Deseas ingresar otro estudiante?");
}

document.writeln("<h2>Lista de Estudiantes</h2>");
document.writeln("<ul>");
for (let i = 0; i < estudiantes.length; i++) {
    document.writeln(`<li>${estudiantes[i].nombre} - Nota: ${estudiantes[i].nota}</li>`);
}
document.writeln("</ul>");

const media = calcularNotaMedia(estudiantes);
document.writeln(`<h3>Nota media del grupo: ${media.toFixed(2)}</h3>`);