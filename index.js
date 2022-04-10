// Links to page that will generate HTML based on Inquirer prompts
const generateHTML = require('./src/generateHTML');

// Variables
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Necessary modules
const fs = require('fs'); 
const inquirer = require('inquirer');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const OUTPUTpath = path.join(OUTPUT_DIR, 'employeeList.html');

const employeeArray = [];

const newEmployee = () => {

    inquirer.prompt([
        {
            type: 'list',
            message: 'What is the role of this employee?',
            name: 'employeeRole',
            choices: ['Engineer', 'Intern', 'Manager', 'None'] 
        }

    ]).then(choice => {
        switch (choice.employeeRole) {

            case 'Intern':
                addIntern();
            break;

            case 'Engineer':
                addEngineer();
            break;

            case 'Manager':
                addManager();
                
            default: writeFile()
        }
    })
}

const addIntern = () => {

    console.log("Please enter this intern's information")

        inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: 'Intern Name'

        },        
        {
            type: 'input',
            name: 'id',
            message: 'ID'
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Email Address'
        }, 
        {
            type: 'input',
            name: 'school',
            message: 'At which school does this intern study?'
        },

    ]).then(answers => {

        console.log(answers);

        const intern = new Intern(

            answers.internName,
            answers.id, 
            answers.email, 
            answers.school)

        employeeArray.push(intern);

        newEmployee();
    })
}

const addEngineer = () => {

    console.log("Enter Engineer's Information")

        inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Engineer Name'
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'ID'
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Email Address'

        }, 
        {
            type: 'input',
            name: 'github',
            message: 'Enter GitHub Username.'
        },
    ]).then(answers => {

        console.log(answers);

        const engineer = new Engineer(

            answers.engineerName,
            answers.id, 
            answers.email, 
            answers.github)

        employeeArray.push(engineer);

        newEmployee();
    })
}

const addManager = () => {

    console.log("Enter Manager's Information")

        inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'Managers Name',
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'ID Number',
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Email Address',
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Office Number.'
        },

    ]).then(answers => {

        console.log(answers);

        const manager = new Manager(

            answers.managerName,
            answers.id, 
            answers.email, 
            answers.officeNumber)

        employeeArray.push(manager);

        newEmployee();
    })
}

const writeFile = () => {

    if (!fs.existsSync(OUTPUT_DIR)) {

        fs.mkdirSync(OUTPUT_DIR);

    } else {

        fs.writeFileSync(OUTPUTpath, generateHTML(employeeArray), 'utf-8');

    }
}; 