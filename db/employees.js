const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

export function getEmployees() {
  return employees;
}

export function getEmployeeById(id) {
  return employees.find((employee) => employee.id === parseInt(id));
}

export function addEmployee(name) {
  const newId = employees.length + 1;
  const newEmployee = {
    id: newId,
    name: name,
  };
  employees.push(newEmployee);
  return newId;
}
/* WARNING: this must remain the default export in order for the tests to work! */
export default employees;
