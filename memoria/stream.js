// Los streams son geeneralmente para archivos grandes
const fs = require('fs');
const stream = require('stream');
const util = require('util')
let data =  '';

let readableStream = fs.createReadStream(`${__dirname}/input.txt`);

// NO es un callback por que no termina, es mas bien como un evento
readableStream.setEncoding('UTF8');
readableStream.on('data', (chunk) => {
  data += chunk;
})

readableStream.on('end', () => {
  console.log(data);
  console.log('He terminado');
})

// writable streams ,esto escribe en el buffer de stdout
// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal\n')

// BUFFER DE TRANSFORMACION
const Transform = stream.Transform;

function Mayus() {
  Transform.call(this)
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus)
  cb();
}

let mayus = new Mayus();

readableStream.pipe(mayus)
.pipe(process.stdout)

// Haciendolo con clase

class MayusC extends Transform {
  _transform(chunk, codif, cb){
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus)
    cb();
  }
}

let mayusC = new MayusC();
readableStream.pipe(mayusC)
.pipe(process.stdout)

