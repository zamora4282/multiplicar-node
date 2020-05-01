const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('Listar', 'Imprimir en consola la tabla de multiplicar',
        opciones
    )
    .command('Crear', 'Genera un archivo con la tabla de multiplicar',
        opciones)
    .help()
    .argv;

module.exports = {
    argv
}