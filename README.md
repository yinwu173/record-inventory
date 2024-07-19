# Employee Payroll Tracker

 ## Description About the Project

 * For this project, it aims to track employee payroll so that the payroll manager can properly budget for the company.

 ## Acceptance Criteria

 * It is done when the user is presented with a series of prompts asking for the first name, last name, and salary of the employee after clicking the "Add employee" button.

 * It is done when the user is prompted to continue or cancel after finishing adding an employee.

 * It is done when the user is prompted to add a new employee when the user chooses to continue.

 * It is done when the employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data when the user chooses to cancel.

 ### Hints 

 * Add a while loop so the user can choose to continue to add another employee.

 * If the user chooses not to continue adding employees, we should set an if statement and declare the function as false so that it would return and end the function.

 * To randomly select an employee, we should use Math.random. This method will generate a random index from the employees array.

 ## Screenshot of Application

 *

 ## Link to Deployed Application

 * https://yinwu173.github.io/record-inventory/

 ## Acknowledgement and Resources

 * [MDN Web Docs on Array.prototype.reduce() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

* I received help from Xpert Learning Assistant with the code in line 48. The illustrated code uses the reduce method to calculate the total salary of the employees. The .reduce will accumulate all values in the employees array and sum up the salary.

* [MDN Web Docs on Window.confirm() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

*  [MDN Web Docs on Math.random() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 

*  I received additional help from Xpert Learning Assistant with the code in line 62. Math.random helps to randomly select an employee from the employees array. It will get a random index from the array of employees. 


