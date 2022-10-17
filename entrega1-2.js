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

/*
Write an object creator function that instantiates an abstract class. Invoke it with different definitions.
*/

class Animal {
  constructor() {
    if (this.constructor === Animal) {
      throw new Error('No se puede instanciar una clase abstracta');
    }
  }
}

class Perro extends Animal {
  constructor() {
    super();
    this.nombre = 'Perro';
  }
}

class Gato extends Animal {
  constructor() {
    super();
    this.nombre = 'Gato';
  }
}

class Caballo extends Animal {
  constructor() {
    super();
    this.nombre = 'Caballo';
  }
}

function crearAnimal(nombre) {
  switch (nombre) {
    case 'Perro':
      return new Perro();
    case 'Gato':
      return new Gato();
    case 'Caballo':
      return new Caballo();
    default:
      throw new Error('No existe ese animal');
  }
}

let perro = crearAnimal('Perro');

console.log(perro.nombre);
console.log(typeof perro);