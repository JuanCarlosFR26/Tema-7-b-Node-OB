let info = {
    nombre: "Juan Carlos",
    apellidos: "Fernández Ramírez",
    edad: 27,
    altura: "180 cms",
    eresDesarrollador: true
}

console.log(info);

let edad = `Edad: ${info.edad} años`;

console.log(edad);

let amigo1 = {
    nombre: "Iván",
    apellidos: "Peña Verde",
    edad: 27,
    altura: "165 cms",
    eresDesarrollador: false
}

let amigo2 = {
    nombre: "Mayte",
    apellidos: "Patino Ramos",
    edad: 26,
    altura: "175 cms",
    eresDesarrollador: false
}

let lista = [info, amigo1, amigo2];

console.log(lista);

function sortArray(x, y) {
    if(x.edad < y.edad) {
        return -1;
    }

    if(x.edad > y.edad) {
        return 1;
    }
    return 0;
}

let s = lista.sort(sortArray);
console.log(s);