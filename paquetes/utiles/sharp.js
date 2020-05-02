//sharp es para trabajar con imagenes
const sharp = require('sharp')
sharp('./original.png')
.grayscale()
.resize(80)
.toFile('resize.png')
