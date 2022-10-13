/*
Crea una funció que, en executar-la, escrigui una frase en un fitxer.
*/

const fs = require("fs");

const frase = "Hola, aquesta frase hauria d'escriure's en un fitxer";

const escriureFitxer = (frase) => {
  fs.writeFile("frase.txt", frase, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Fitxer creat");
    }
  });
};

escriureFitxer(frase);

/*
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
*/

const llegirFitxer = () => {
  fs.readFile("frase.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

llegirFitxer();

/*
Crea una funció que comprimeixi el fitxer del nivell 1.
*/

const zlib = require("zlib");
const gzip = zlib.createGzip();

const fitxer = fs.createReadStream("frase.txt");

const comprimir = fs.createWriteStream("frase.txt.gz");

fitxer.pipe(gzip).pipe(comprimir);

/*
Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
*/

const missatge = () => {
  console.log("Missatge");
  setTimeout(missatge, 1000);
};

missatge();
