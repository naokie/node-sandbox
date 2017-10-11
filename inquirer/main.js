const inquirer = require('inquirer');

inquirer
  .prompt([{
    name: 'env',
    message: 'Which environment?',
    type: 'list',
    choices: ['production', 'development', 'qa']
  }])
  .then((answer) => {
    console.log(answer);
  })
