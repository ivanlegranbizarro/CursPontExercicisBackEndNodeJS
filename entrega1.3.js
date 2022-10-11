/*
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
*/

function retornaPromesa() {
  return new Promise((resolve, reject) => {
    let num = Math.random();
    if (num > 0.5) {
      resolve("La promesa s'ha resolt correctament amb el número " + num);
    } else {
      reject("La promesa no s'ha pogut resoldre amb el número " + num);
    }
  });
}

retornaPromesa()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/*
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut
*/

const arrowFunction = (param, callback) => {
  if (param == 'Iván') {
    callback(console.log('Hola, Iván'));
  } else {
    callback(console.log('Eliminar intrús xD'));
  }
};

arrowFunction('Iván', (res) => res);

/*
Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.
*/

let employees = [
  {
    id: 1,
    name: 'Linux Torvalds',
  },
  {
    id: 2,
    name: 'Bill Gates',
  },
  {
    id: 3,
    name: 'Jeff Bezos',
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    let employee = employees.find((e) => e.id === id);
    if (employee) {
      resolve(employee);
    } else {
      reject("No s'ha trobat l'empleat");
    }
  });
};

getEmployee(1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/*
  Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.
  */

getSalary = (empleat) => {
  return new Promise((resolve, reject) => {
    let { id } = empleat;
    let salary = salaries.find((s) => s.id === id);
    if (salary) {
      resolve(salary);
    } else {
      reject("No s'ha trobat el salari");
    }
  });
};

const empleat1 = {
  id: 1,
  name: 'Linux Torvalds',
};

getSalary(empleat1);

/*
Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.
*/

getEmployee(3).then((res) => {
  console.log({
    employee: res,
  });
  getSalary(res).then((res) => {
    console.log({
      salary: res,
    });
  });
});

/*
Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.
*/

getEmployee(5)
  .then((res) => {
    console.log({
      employee: res,
    });
    getSalary(res).then((res) => {
      console.log({
        salary: res,
      });
    });
  })
  .catch((err) => console.log(err));


/*
COMENTARI: Oriol, jo pels enunciats he entès que no s'havia d'usar el async/await, sinó Promeses tradicionals. Però després als recursos que s'han adjuntat es parla de async/await, per tant no se si es podien emprar o no 😑. Si es pogués, hagués fet algo com això:

async function getEmployeeAndSalary(id) {
  try {
    const employee = await getEmployee(id);
    const salary = await getSalary(employee);
    const result = {
      employee,
      salary,
    };
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getEmployeeAndSalary(3);

*/