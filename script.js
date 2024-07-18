// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // created an array
  const employeesArray = [];
  let addAnotherEmployee = true;


  // add while loop so that user can choose to add another employee
  while(addAnotherEmployee) {
    // gather info by asking user for employee's first and last name and salary
    let firstName = prompt("Please enter employee first name")
    let lastName = prompt("Please enter employee last name")
    let salary = prompt("Please enter employee salary")


    // salary needs to be entered as a number
    salary = isNaN(Number(salary));


    //making an object to store user response
    const employee = {
      firstName,
      lastName,
      salary
    };

    // to add and return an array use .push
    employeesArray.push(employee);

    // ask user if they want to add another employee
    const addMore = confirm("Would you like to add another employee?")

    // if user does not want to add another employee, it would end the function
    if (!addAnotherEmployee) {
      return;
    }
  }
return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // To calculate the total salary of the employees use the reduce method
  // .reduce will accumulate all values in the employees array - xpert learning assistant helped with deriving this code
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  // To obtain the average salary, divide total salary over the employees array
  const averageSalary = totalSalary / employeesArray.length;

  // This logs the average salary of the employees
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.length}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // To randomly select an employee from the employees array
  // Math.floor rounds down the number and Math.random returns a random number - xpert learning assistant helped with deriving the code
  const randomIndex = Math.floor(Math.random() * employeesArray.length)
  // To retrieve the randomly seleced employee from the array - xpert learning assistant helped with deriving the code
  const randomEmployee = employeesArray[randomIndex]

  // To display and log the randomly selected employee
  console.log(`Congratulations to ${firstName} ${lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
