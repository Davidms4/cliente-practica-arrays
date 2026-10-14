// Array con números repetidos
let valores = [1, 2, 3, 2, 1, 4, 5];

// Set conserva solo los valores únicos
let unicos = new Set(valores);

// Convertimos el Set en un nuevo array
let sinRepetidos = [...unicos];

// Mostramos el resultado
console.log("Valores sin repetidos:", sinRepetidos);