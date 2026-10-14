// Crear un Map
let edades = new Map();

// Añadir nombres y edades
edades.set("David", 19);
edades.set("Mateu", 20);
edades.set("Esther", 21);

// Actualizar la edad de Esther
edades.set("Esther", 22);

// Mostrar todos los nombres con sus edades
for (let [nombre, edad] of edades) {
    console.log("Persona: " + nombre + " || Edad: " + edad);
}