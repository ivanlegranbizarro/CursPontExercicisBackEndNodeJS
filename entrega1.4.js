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
