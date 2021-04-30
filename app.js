



const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yangs');
argv
// console.clear();

// // console.log(process.argv)
console.log(argv.h)

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [, base = 5 ] = arg3.split('=')
// console.log( base )

// const base = 1;

crearArchivo( argv.b, argv.l , argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.inverse, 'creado'.green))
    .catch( err => console.log(err) );

