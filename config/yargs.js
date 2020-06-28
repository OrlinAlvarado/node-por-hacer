const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completadoBase = {
    alias: 'c',
    desc: 'Parametro para listar'
}


const completado = {
    ...completadoBase,
    default:true
}



const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion
    })
    .command('listar', 'Listar tareas', {
        completado:completadoBase
    })
    .help()
    .argv


module.exports = {
    argv
}