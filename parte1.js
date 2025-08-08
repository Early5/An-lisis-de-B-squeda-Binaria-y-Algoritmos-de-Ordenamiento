// Lista desordenada
let libros = [
    { codigo: "L003", titulo: "Introducción a la IA", anio: 2023 },
    { codigo: "L001", titulo: "Algoritmos I", anio: 2019 },
    { codigo: "L002", titulo: "Estructuras de Datos", anio: 2020 },
    { codigo: "L005", titulo: "Redes de Computadores", anio: 2022 },
    { codigo: "L004", titulo: "Bases de Datos", anio: 2018 },
    { codigo: "L006", titulo: "Sistemas Operativos", anio: 2017 }
];

// Función de búsqueda binaria
function busquedaBinaria(lista, codigo) {
    let izquierda = 0;
    let derecha = lista.length - 1;

    while (izquierda <= derecha) {
        const medio = Math.floor((izquierda + derecha) / 2);
        const libroMedio = lista[medio].codigo;

        if (libroMedio === codigo) {
            return medio; // Encontrado
        } else if (libroMedio < codigo) {
            izquierda = medio + 1;
        } else {
            derecha = medio - 1;
        }
    }

    return null; // No encontrado
}

// Prueba en lista DESORDENADA (no funciona)
console.log("--- Búsqueda en lista DESORDENADA ---");
const resultadoDesordenado = busquedaBinaria(libros, "L001");
console.log("Posición de L001:", resultadoDesordenado); // Probablemente -1 (falla)





// Ordenamos la lista
libros.sort((a, b) => a.codigo.localeCompare(b.codigo));

// Prueba en lista ORDENADA (funciona)
console.log("\n--- Búsqueda en lista ORDENADA ---");
const resultadoOrdenado = busquedaBinaria(libros, "L001");
console.log("Posición de L001:", resultadoOrdenado); // Debe devolver 0