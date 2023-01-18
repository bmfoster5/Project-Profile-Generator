const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (teamArray) => {
let cards = [];
console.log(teamArray);

function managerCard (employee) {
  return `
  <h1 class="display-4">Hi! My name is ${employee.name}</h1>
  <p class="lead">I am from ${employee.getRole()}.</p>
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  <ul class="list-group">
    <li class="list-group-item">My manager office number is: ${employee.officeNumber}</li>
    <li class="list-group-item">Email: ${employee.email}</li>
  </ul>
</div>`
}
function internCard (intern) {
  return `
  <h1 class="display-4">Hi! My name is ${intern.name}</h1>
  <p class="lead">I am from ${intern.getRole()}.</p>
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  <ul class="list-group">
    <li class="list-group-item">School: ${intern.school}</li>
    <li class="list-group-item">Email: ${intern.email}</li>
  </ul>
</div>`
}
function engineerCard (engineer) {
  return `
  <h1 class="display-4">Hi! My name is ${engineer.name}</h1>
  <p class="lead">I am from ${engineer.getRole()}.</p>
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  <ul class="list-group">
    <li class="list-group-item">My GitHub username is ${engineer.github}</li>
    <li class="list-group-item">Email: ${engineer.email}</li>
  </ul>
</div>`
}

for (var i = 0; i<teamArray.length; i++) {
  //console.log(teamArray[i]);
  if(teamArray[i].getRole() === 'Manager') {
    cards.push(managerCard(teamArray[i]))
  }
  else if(teamArray[i].getRole() === 'Engineer') {
cards.push(engineerCard(teamArray[i]))
  }
  else {
    cards.push(internCard(teamArray[i]))
};
}
return cards.join('')
};


module.exports = teamArray => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Project Profile Generator</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">

  ${generateHTML(teamArray)}
  </div>
</body>
</html>`;
}


