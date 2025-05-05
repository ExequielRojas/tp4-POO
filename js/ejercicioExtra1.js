//Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (los hobbies son un array de strings). Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.

const persona = {
    nombre: prompt('Ingrese su nombre'),
    edad: parseInt(prompt('Ingrese su edad')),
    hobbies: []
}

function agregarHobby (persona, nuevoHobby){
    persona.hobbies.push(nuevoHobby);
}

let nuevoHobby = prompt('Ingresa un nuevo hobby que tengas')
while (nuevoHobby !== null && nuevoHobby.trim() !== '') {
    agregarHobby(persona, nuevoHobby);
    nuevoHobby = prompt('Ingresa otro hobby o presiona "Cancelar" para terminar');
}

document.writeln(`<h2>Información de la Persona</h2>`);
document.writeln(`<p>Nombre: ${persona.nombre}</p>`);
document.writeln(`<p>Edad: ${persona.edad}</p>`);
document.writeln(`<h3>Hobbies:</h3>`);
document.writeln(`<ul>`);

for (let i = 0; i < persona.hobbies.length; i++) {
    document.writeln(`<li>${persona.hobbies[i]}</li>`);
}

document.writeln(`</ul>`);