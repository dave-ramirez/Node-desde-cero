// Requerimos el file system, verificar DOC de Nodejs
const fs = require('fs');

let listarTabla = (base, limite) => {
  for (let i = 1; i < limite; i++) {
    console.log(`${base} x ${ i } = ${base * i} \n`)
  }
}

let crearArchivo = ( base, limite = 10 ) => {
  return new Promise ( (resolve, reject) =>{

    if (!Number(base)) {
      reject(`El valor ${base} no es un numero`)
      return;
    }

    let contenido = '';
    for (let i = 1; i <= limite; i++) {
      contenido += `${base} * ${i} = ${base * i} \n`;
    }
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) => {
      if (err) reject(err);
      else
        resolve(`tabla-${base}-al-${limite}.txt`)
    });
  });
};


module.exports = {
  crearArchivo,
  listarTabla
}
