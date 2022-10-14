/*
Crea una funció que, en executar-la, escrigui una frase en un fitxer.
*/

const fs = require('fs');

const frase = "Hola, aquesta frase hauria d'escriure's en un fitxer";

const escriureFitxer = (frase) => {
  fs.writeFile('frase.txt', frase, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Fitxer creat');
    }
  });
};

escriureFitxer(frase);

/*
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
*/

const llegirFitxer = () => {
  fs.readFile('frase.txt', 'utf8', (err, data) => {
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

const zlib = require('zlib');

const comprimeixFitxer = () => {
  fs.createReadStream('frase.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('frase.txt.gz'));
};

comprimeixFitxer();

/*
Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
*/

const missatge = () => {
  console.log('Missatge');
  setTimeout(missatge, 1000);
};

missatge();

/*
Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilitzant Node Child Processes.
*/

const spawn = require('child_process').spawn;
const os = require('os');
const userHomeDir = os.homedir();

const llistar = function () {
  const llistar = spawn('ls', [userHomeDir]);
  llistar.stdout.on('data', (data) => {
    console.log(data.toString());
  });
  llistar.stderr.on('data', (data) => {
    console.log(data.toString());
  });
};

llistar();

/*
Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
*/

const codificaFitxer = () => {
  const fitxer = fs.readFileSync('frase.txt');
  const base64 = fitxer.toString('base64');
  const hex = fitxer.toString('hex');
  fs.writeFileSync('frase.txt.base64', base64);
  fs.writeFileSync('frase.txt.hex', hex);
};

codificaFitxer();

/*
Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
*/

const crypto = require('crypto');

const encriptarFitxer = () => {
  const fitxer1 = fs.readFileSync('frase.txt.base64');
  const fitxer2 = fs.readFileSync('frase.txt.hex');
  const algorithm = 'aes-192-cbc';
  const key_in_bytes = crypto.randomBytes(24);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key_in_bytes, iv);
  let encriptat1 = cipher.update(fitxer1, 'utf8', 'hex');
  encriptat1 += cipher.final('hex');
  const cipher2 = crypto.createCipheriv(algorithm, key_in_bytes, iv);
  let encriptat2 = cipher2.update(fitxer2, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  fs.writeFileSync('frase.txt.base64.enc', encriptat1);
  fs.writeFileSync('frase.txt.hex.enc', encriptat2);
  fs.unlinkSync('frase.txt.base64');
  fs.unlinkSync('frase.txt.hex');
};

encriptarFitxer();

/*
Passos que s' executen amb codificaFitxer():
1. Llegeix el fitxer frase.txt
2. El codifica en base64
3. El codifica en hexadecimal
4. Escriu el resultat en els fitxers frase.txt.base64 i frase.txt.hex

Passos que s'executen amb encriptarFitxer():
1. Llegeix els fitxers frase.txt.base64 i frase.txt.hex
2. Crear una variable amb el nom de l'algoritme
3. Crear una variable amb una clau aleatòria de 24 bytes
4. Crear una variable amb un vector d'inicialització aleatori de 16 bytes
5. Crear un objecte cipher amb el mètode createCipheriv
6. Encriptar el fitxer frase.txt.base64 amb el mètode update i el mètode final
7. Encriptar el fitxer frase.txt.hex amb el mètode update i el mètode final
8. Escriure el resultat en els fitxers frase.txt.base64.enc i frase.txt.hex.enc
9. Esborrar els fitxers frase.txt.base64 i frase.txt.hex
*/
