// Generar 50 combinaciones
for (let index = 0; index < 50; index++) {
    let loteria = [];

    // Conseguir 6 números diferentes
    do {
        let numero = Math.floor(Math.random() * 49) + 1;

        if (!loteria.includes(numero)) {
            loteria.push(numero);
        }
    } while (loteria.length < 6);

    // Ordenar los números de menor a mayor
    loteria.sort((a, b) => a - b);

    console.log("Lotería " + (index + 1) + ":", loteria);
}

