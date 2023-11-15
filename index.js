
const inquirer = require('inquirer');
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./queries');

//prompt user with questions
inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
      ],
    },
  ])
  .then(async (answers) => {
    //for handling selected questions and presenting new questions and table
    switch (answers.action) {
      case 'View all departments':
        const departments = await viewAllDepartments();
        console.table(departments);
        break;
      case 'View all roles':
        const roles = await viewAllRoles();
        console.table(roles);
        break;
      case 'View all employees':
        const employees = await viewAllEmployees();
        console.table(employees);
        break;
      case 'Add a department':
       
        break;
      case 'Add a role':
      
        break;
      case 'Add an employee':
       
        break;
      case 'Update an employee role':
       
        break;
      default:
        console.log('Invalid action');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
