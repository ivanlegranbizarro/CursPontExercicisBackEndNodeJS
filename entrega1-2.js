/* 
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
*/

(() => {
  console.log(5 + 5);
})();

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

let persona = new Persona("Pepito");

persona.dirNom();

/*
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
*/

class Animal {
  constructor() {
    if (this.constructor === Animal) {
      new TypeError("La classe 'Animal' no pot ser instanciada");
    }
  }
}

function createAnimal(Animal) {
  return new Animal();
}

tortuga = createAnimal(Animal);
llop = createAnimal(Animal);
gos = createAnimal(Animal);
