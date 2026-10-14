let data = [
    { name: "Nacho", telephone: "966112233", age: 40 },
    { name: "Ana", telephone: "911223344", age: 35 },
    { name: "Mario", phone: "611998877", age: 15 },
    { name: "Laura", telephone: "633663366", age: 17 }
];

// Añadir dos personas al final
data.push(
    { name: "Pedro", telephone: "611944444", age: 25 },
    { name: "Julia", phone: "633232323", age: 37 }
);

console.log("Después de añadir:", [...data]);

// Ordenar por edad de menor a mayor
data.sort((a, b) => a.age - b.age);

console.log("Ordenados por edad:", [...data]);

// Ordenar por nombre alfabéticamente
data.sort((a, b) => a.name.localeCompare(b.name));

console.log("Ordenados por nombre:", [...data]);

// Crear un nuevo array con los mayores de 30 años
let mayoresDe30 = data.filter(persona => persona.age > 30);

console.log("Mayores de 30 años:", mayoresDe30);