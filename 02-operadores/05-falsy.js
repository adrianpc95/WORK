// short-circuit

// Falso
// false
//a
//**
// null
// undefined
// NaN
let nombre = 'Cabra loca';
let username = nombre || 'Anonimo'
console.log(username);

function fn1(){
    console.log['soy funcion 1'];
    return true;
}

function fn2(){
    console.log['soy funcion 2']
}
let x = fn1() && fn2();

