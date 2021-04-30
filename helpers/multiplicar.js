var colors = require('colors');
const fs = require("fs");

const crearArchivo = async (base = 5, listar, hasta = 10 ) => {
  try {
    if (listar) {
      console.log("============================".rainbow);
      console.log(`         Tabla del ${base}        `.rainbow);
      console.log("============================".rainbow);
    }

    let salida = "";
  
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${5 * i} \n`;
    }
    listar ? console.log(salida.rainbow) : "";

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
