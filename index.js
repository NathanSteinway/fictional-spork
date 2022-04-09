// Links to page that will generate HTML based on Inquirer prompts
const generateHTML = require('./src/generateHTML');

// Variables
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Necessary modules
const fs = require('fs'); 
const inquirer = require('inquirer');
const path = require('path');