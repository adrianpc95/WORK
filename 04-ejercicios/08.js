/**
 * crear algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */
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

let pares = [
    [1, { id: 1, name: 'Adrian'}],
    [2, { id: 2, name: 'Piñol'}],
    [3, { id: 3, name: 'Caballo'}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs [idx] = [elemento.id, elemento];
    }

    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);