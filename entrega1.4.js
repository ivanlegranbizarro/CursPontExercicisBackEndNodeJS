/*
Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.
*/

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
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

const getSalary = (empleat) => {
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

const getEmployeeAndSalary = async (id) => {
  try {
    const employee = await getEmployee(id);
    console.log(employee);
    const salary = await getSalary(employee);
    console.log(salary);
  } catch (error) {
    console.log(error);
  }
};

getEmployeeAndSalary(1);

/*
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
*/

function retornaPromesa() {
  return new Promise((resolve, reject) => {
    let num = Math.random();
    if (num > 0.5) {
      setTimeout(() => {
        resolve("La promesa s'ha resolt correctament amb el número " + num);
      }, 2000);
    } else {
      reject("La promesa no s'ha pogut resoldre amb el número " + num);
    }
  });
}

async function cridaPromesa() {
  try {
    const resultat = await retornaPromesa();
    console.log(resultat);
  } catch (error) {
    console.log(error);
  }
}

cridaPromesa();

/*
Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
*/

function doble(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      setTimeout(() => {
        resolve(num * 2);
      }, 2000);
    } else {
      reject("El paràmetre no és un número");
    }
  });
}

doble(5).then((res) => console.log(res));

/*
Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.
*/

async function sumaDobles(num1, num2, num3) {
  try {
    const doble1 = await doble(num1);
    const doble2 = await doble(num2);
    const doble3 = await doble(num3);
    return doble1 + doble2 + doble3;
  } catch (error) {
    console.log(error);
  }
}

sumaDobles(1, 2, 3).then((res) => console.log(res));

/*
Força i captura tants errors com puguis dels nivells 1 i 2.
*/

/*
D'acord, a totes les funcions he afegit un try i un catch o un resolve-reject, a més, a la funció 'Doble' he posat una minivalidació per comprovar que l' usuari passa una dada de type Number.
*/
