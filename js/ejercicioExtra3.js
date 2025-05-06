//Crea un objeto libro que tenga propiedades título, autor, año y género. Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. Usa prompt para ingresar los datos de los libros y el género.

const libros = []

function filtrarPorGenero(arrayLibros, genero) {
    const arrayFiltrado = arrayLibros.filter((itemLibro) => itemLibro.genero === genero)
    return arrayFiltrado
}

do{

    const titulo = prompt("Ingresa un titulo")
    const autor = prompt("Ingresa un autor")
    const anio = prompt("Ingresa un año")
    const genero = prompt("Ingresa un genero")
    
    libros.push({titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero})
    
    console.log(libros)
}while(confirm('¿Desea ingresar otro libro?'))

const generoSolicitado = prompt('Ingresa un genero para buscar')

const librosPorGenero = filtrarPorGenero(libros, generoSolicitado)

if (librosPorGenero.length > 0) {
    document.writeln(`<h2>Libros del género "${generoSolicitado}":</h2>`);
    librosPorGenero.forEach((libro, index) => {
        document.writeln(`<p><strong>${index + 1}.</strong> "${libro.titulo}" por ${libro.autor} (${libro.anio})</p>`);
    });
} else {
    document.writeln(`<p>No se encontraron libros del género "${generoSolicitado}".</p>`);
}