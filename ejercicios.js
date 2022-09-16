/* 
Curs Pont a l'especialització BackEnd NodeJS
Iván Legrán Bizarro 
*/

/* 
Nivell 1

- Exercici 1

Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre. 
*/

function nomUsuari(nom) {
  console.log(nom);
}

/* 
Nivell 2

- Exercici 1

Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge. 
*/

function nomICognom(nom, cognom) {
  console.log(`El teu nom és ${nom} i el teu cognom és ${cognom}`);
}

/* 
Nivell 2

- Exercici 2
Invoca una funció que retorni un valor des de dins d'una template literal.

*/

function unValor() {
  return 'Hola, sóc un valor molt valuós';
}

`Hola, des d' aquest template literal crido el valor d'una funció: ${unValor()}`;

/*
Nivell 3

- Exercici 1

Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

*/

const arrayDeFuncions = [
  function () {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
  function () {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
  function () {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
  function () {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
  function () {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
  function () {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
  function () {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
  function () {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
  function () {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
  function () {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  },
];

arrayDeFuncions.forEach((funcio) => funcio());

/*
Nivell 3

- Exercici 2

Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària rebut com a paràmetre.

*/

const nomUsuariAutoExecutable = (function (nom) {
  console.log(nom);
})('Faustino');
