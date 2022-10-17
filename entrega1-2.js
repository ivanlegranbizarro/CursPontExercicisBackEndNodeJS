/* 
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
*/

console.log(
  (() => {
    return 5 + 5;
  })()
);

/*
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.
*/

funcPam = (param) => {
  return { param };
};

console.log(funcPam(5));

/*
Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.
*/

class Persona {
  constructor(nom) {
    this.nom = nom;
  }
  dirNom() {
    console.log(this.nom);
  }
}

let persona = new Persona('Pepito');

persona.dirNom();

/*
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
*/

class Animal {
  constructor() {
    if (this.constructor === Animal) {
      throw new Error('No es pot instanciar una classe abstracta');
    }
  }
}

class Gos extends Animal {
  constructor() {
    super();
    this.nombre = 'Gos';
  }
}

class Gat extends Animal {
  constructor() {
    super();
    this.nombre = 'Gat';
  }
}

class Cavall extends Animal {
  constructor() {
    super();
    this.nombre = 'Cavall';
  }
}

function crearAnimal(nombre) {
  switch (nombre) {
    case 'Gos':
      return new Gos();
    case 'Gat':
      return new Gat();
    case 'Cavall':
      return new Cavall();
    default:
      throw new Error('Aquest animal no existeix');
  }
}

let gos = crearAnimal('Gos');

console.log(gos.nombre);
console.log(typeof gos);
