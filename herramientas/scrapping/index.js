const puppeteer = require('puppeteer');
// Se lo mete en un parenthesis para convertirla en una expresion.
// Luego se la ejecuta agregando ()
// Esto es para poder usar await
(async () => {
  console.log('lanzamos navegador');
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js')

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(`=> ${h1.innerHTML}`);
    return h1.innerHTML;
  })
  console.log(titulo1);
  browser.close();
  console.log('Cerramos navegador');
})()