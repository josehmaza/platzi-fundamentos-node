// Para usar bcrypt es necesario que este instalado node-gyp
const bcrypt = require('bcrypt');
const password = '1234Segura!';
bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);
    bcrypt.compare(password, hash, (err, res) => {
        console.log(`la comparacion ${ res }`)
    } )
})
