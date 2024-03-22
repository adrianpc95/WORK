
function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUuario('Adrian', 'adrianpinol95ns@gmail.com');
let user2 = crearUuario('Adri', 'adrianpc95s@gmail.com');

console.log(user1, user2);
