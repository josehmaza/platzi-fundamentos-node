
function asincrona(callback) {
  //
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a)
    } catch (error) {
      callback(error)
    }
  }, 0);
}

// Se debe aplicar error first callback y no con try catch por que el error se puede ejecutar en otro hilo

asincrona((error, dato) => {
  if (error){
    console.error(`Tenemos un error`);
    console.error(error)
    return false;
   
  } 
  console.log(`Todo ha ido bien, mi dato es ${dato}`);
})

// Esto no se debe aplicar
try {
  asincrona((error, dato) => {
    if (error){
      // console.error(`Tenemos un error`);
      // console.error(error)
      // return false;
      throw error
    } 
    console.log(`Todo ha ido bien, mi dato es ${dato}`);
  })

} catch (error) {
  console.error(`Hemos capturado el error`)
  console.error(error)
}

