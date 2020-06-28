const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    let file = `db/data.json`;
    fs.writeFile(file, data, (err) => {
        if (err) throw err;
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();

    return listadoPorHacer;
}

const getListadoCompletado = (completado = false) => {
    cargarDB();

    let listadoTemp = listadoPorHacer.filter(tarea => tarea.completado === completado);
    return listadoTemp;
}

const actualizar = (descripcion, completado=true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if( index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else {

        return false;
    }
    
}

//Esta es una forma de hacerlo
// const borrar = (descripcion) => {
//     cargarDB();
//     let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

//     if( index >= 0){
//         listadoPorHacer.splice(index);
//         guardarDB();
//         return true;
//     }else {

//         return false;
//     }
// }

const borrar = (descripcion) => {
    cargarDB();
    
    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );

    if( listadoPorHacer.length === nuevoListado.length ){
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    getListadoCompletado,
    actualizar,
    borrar
}