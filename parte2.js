// Lista casi ordenada
let librosCasiOrdenados = [
    { codigo: "L001", titulo: "Algoritmos I", anio: 2019 },
    { codigo: "L002", titulo: "Estructuras de Datos", anio: 2020 },
    { codigo: "L003", titulo: "Introducción a la IA", anio: 2023 },
    { codigo: "L005", titulo: "Redes de Computadores", anio: 2022 },
    { codigo: "L004", titulo: "Bases de Datos", anio: 2018 }, // Fuera de lugar
    { codigo: "L006", titulo: "Sistemas Operativos", anio: 2017 }
];

// Algoritmo de burbuja (con contadores)
function ordenamientoBurbuja(lista) {
    let comparaciones = 0;
    let intercambios = 0;
    const n = lista.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            comparaciones++;
            if (lista[j].codigo > lista[j + 1].codigo) {
                [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
                intercambios++;
            }
        }
    }

    console.log(`Burbuja: Comparaciones = ${comparaciones}, Intercambios = ${intercambios}`);
    return lista;
}

// Algoritmo de inserción (con contadores)
function ordenamientoInsercion(lista) {
    let comparaciones = 0;
    let intercambios = 0;
    const n = lista.length;

    for (let i = 1; i < n; i++) {
        let j = i;
        while (j > 0) {
            comparaciones++;
            if (lista[j].codigo < lista[j - 1].codigo) {
                [lista[j], lista[j - 1]] = [lista[j - 1], lista[j]];
                intercambios++;
                j--;
            } else {
                break;
            }
        }
    }

    console.log(`Inserción: Comparaciones = ${comparaciones}, Intercambios = ${intercambios}`);
    return lista;
}

// Pruebas
console.log("\n--- Ordenamiento con Burbuja ---");
const copiaBurbuja = [...librosCasiOrdenados];
ordenamientoBurbuja(copiaBurbuja);
console.log("Resultado:", copiaBurbuja.map(l => l.codigo));

console.log("\n--- Ordenamiento con Inserción ---");
const copiaInsercion = [...librosCasiOrdenados];
ordenamientoInsercion(copiaInsercion);
console.log("Resultado:", copiaInsercion.map(l => l.codigo));
