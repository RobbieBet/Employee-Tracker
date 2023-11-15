

const pool = require('./db');

function viewAllDepartments() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM departments', (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

function viewAllRoles() {
 //To do - implement logic for functions
}

function viewAllEmployees() {
  
}

function addDepartment(department) {
  
}

function addRole(role) {
  
}

function addEmployee(employee) {
  
}

function updateEmployeeRole(employeeId, roleId) {
  
}

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
