





























// const { fstat } = require('fs');
// const inquirer = require('inquirer');
// const { writeFile } = require('fs').promises;

// // TODO: Create an array of questions for user input
// const promptUser = () => {
//     return inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: 'What is your GitHub username?',
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: 'What is your email address?',
//             },
//             {
//                 type: 'input',
//                 name: 'github',
//                 message: 'What is your github username?',
//             },
//             {
//                 type: 'input',
//                 name: 'ID',
//                 message: 'Please enter a 4 digit ID',
//             },
//         ])
// };

// //Create a function to write HMTL file
// function writeToFile(data) {
//     fstat.writeFile(`./dist${data.filename}.md`, generateHTML(data), (err) =>
//         err ? console.error(err) : console.log("HTML has been created")
//     );
// }

// //Create a function to initialize app
// const init = () => {
//     promptUser()
//         .then((data) => {
//             console.log(data)
//             writeFile('index.html', generateHTML(data))
//         })
//         .then(() => console.log('Successfully wrote to index.html'))
// };

// //Function call to initialize app
// init();

// const generateHTML = (data) => {
//     return `# ${data.projectName}
    
    
    
    
    
// `}

