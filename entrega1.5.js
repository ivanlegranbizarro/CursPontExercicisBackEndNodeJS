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

/*
Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilitzant Node Child Processes.
*/

const spawn = require("child_process").spawn;
const os = require("os");
const userHomeDir = os.homedir();

const llistar = function () {
  const llistar = spawn("ls", [userHomeDir]);
  llistar.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  llistar.stderr.on("data", (data) => {
    console.log(data.toString());
  });
};

llistar();

/*
Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
*/

const codificaFitxer = () => {
  const fitxer = fs.readFileSync("frase.txt");
  const base64 = fitxer.toString("base64");
  const hex = fitxer.toString("hex");
  fs.writeFileSync("frase.txt.base64", base64);
  fs.writeFileSync("frase.txt.hex", hex);
};

codificaFitxer();

/*
Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
*/

const crypto = require("crypto");
const algorithm = "aes-192-cbc";
const key_in_bytes = crypto.randomBytes(24);

const encriptarFitxer = () => {
  const fitxer = fs.readFileSync("frase.txt");
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key_in_bytes, iv);
  let encrypted = cipher.update(fitxer, "utf8", "hex");
  encrypted += cipher.final("hex");
  fs.writeFileSync("frase.txt.aes", encrypted);
  fs.unlinkSync("frase.txt");
  fs.unlinkSync("frase.txt.base64");
  fs.unlinkSync("frase.txt.hex");
};

encriptarFitxer();

/*
Passos que s' executen amb codificaFitxer():
1. Llegeix el fitxer frase.txt
2. El codifica en base64
3. El codifica en hexadecimal
4. Escriu el resultat en els fitxers frase.txt.base64 i frase.txt.hex

Passos que s'executen amb encriptarFitxer():
1. Llegeix el fitxer frase.txt
2. Genera una clau de 24 bytes
3. Genera un vector d'inicialització de 16 bytes
4. Crea un objecte cipher amb l'algoritme aes-192-cbc
5. Encripta el fitxer frase.txt
6. Escriu el resultat en el fitxer frase.txt.aes
7. Esborra els fitxers frase.txt, frase.txt.base64 i frase.txt.hex
*/
