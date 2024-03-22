let user = {
    id: 1,
    name: 'Caballo',
    age: 25
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['Caballo', 'Canguro', 'Iguana']
for (let indice in animales) {
    console.log (indice, animales [indice]);

}