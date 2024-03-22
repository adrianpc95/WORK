/**
 * Crear algoritmo que deuelva un
 * array de objetos en base a pares
 */
let pairs = [
    [1, {name: 'Adrian'}],
    [2, {name: 'Piñol'}],
    [3, {name: 'Caballo'}],
];

let array = [{
    id: 1,
    name: 'Adrian',
}, {
    id: 2,
    name: 'Piñol',
}, {
    id: 3,
    name: 'Caballo',
}]

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1]
        ccollection[idx].id = elemento[0]
    }

    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);