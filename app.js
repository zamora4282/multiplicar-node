const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let commando = argv._[0];

switch (commando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo }`))
            .catch((err) => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
        break;

}

//console.log(argv.base);