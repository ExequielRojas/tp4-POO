//Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. Usa un bucle para calcular la calificación más alta del alumno y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).

const alumno = {
    nombre: prompt('Ingrese el nombre del alumno'),
    curso: prompt('Ingrese el curso del alumno (EJ: 1A'),
    calificaciones: [],

    agregarCalificacion: function(nuevaCalificacion){
      this.calificaciones.push(nuevaCalificacion)
    }
}

do{
    const nuevaCalificacion = parseInt(prompt(`Ingrese la calificacion del alumno ${alumno.nombre}`))
    alumno.agregarCalificacion(nuevaCalificacion)
} while (confirm('Quiere agregar una calificacion mas?'));

let maximaCalificacion = 0;

for(let i = 0; i < alumno.calificaciones.length; i++){
    if(alumno.calificaciones[i] > maximaCalificacion){
        maximaCalificacion = alumno.calificaciones[i]
    }
}

switch (true) {
    case (maximaCalificacion >= 9 && maximaCalificacion <= 10):
        alert(`La calificacion del alumno ${alumno.nombre} del curso ${alumno.curso} esta clasificado como nota A`)
        break;

    case (maximaCalificacion >= 7 && maximaCalificacion < 9):
        alert(`La calificacion del alumno ${alumno.nombre} del curso ${alumno.curso} esta clasificado como nota B`)
        break;

    case (maximaCalificacion >= 5 && maximaCalificacion < 7):
        alert(`La calificacion del alumno ${alumno.nombre} del curso ${alumno.curso} esta clasificado como nota C`)
        break;

    case (maximaCalificacion >= 0 && maximaCalificacion < 5):
        alert(`La calificacion del alumno ${alumno.nombre} del curso ${alumno.curso} esta clasificado como nota D`)
        break;

    default:
        alert('Ingresaste un valor invalido')
        break;
}