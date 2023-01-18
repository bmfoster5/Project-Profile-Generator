const inquirer = require("inquirer")
const Engineer = require("../assets/lib/engineer");
const Intern = require("../assets/lib/intern");
const Manager = require("../assets/lib/manager");
const generateHTML = require("./generateHTML");
const fs = require("fs");

const teamArray = [];

function createManager() {
  console.log('Please build your team 👥');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",

      },
      {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's id?",

      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?",

      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?",

      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamArray.push(manager);
      displayMenu();
    })

};


function createIntern() {
  console.log('Please build your team 👥');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: "What is the team intern's name?",

      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the team intern's id?",

      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the team intern's email?",

      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What is the team intern's school?",

      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamArray.push(intern);
      console.log(teamArray);
      displayMenu();
    })
};


function createEngineer() {
  console.log('Please build your team 👥');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "What is the team engineer's name?",

      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is the team engineer's id?",

      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the team engineer's email?",

      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What is the team engineer's github?",

      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamArray.push(engineer);
      displayMenu();
    })
};

function displayMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        choices: ['add an engineer', 'add an intern', 'Finish'],
        name: 'action',
        message: 'Please choose an option:'
      }
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.action === 'add an engineer') {
        createEngineer();
      } else if (
        answers.action === 'add an intern'
      ) { createIntern() }
      else {
        console.log("Team created");

        fs.writeFileSync('team.HTML', generateHTML(teamArray))
      }
    })
}


createManager();
