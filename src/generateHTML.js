const generateHTML = function (employees) {
    
    const generateManager = function (manager) {
        return `
        <div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: 
                        <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `
    }
    
    const generateEngineer = function (engineer) {
        return `
        <div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: 
                        <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: 
                        <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `
    }
    
    const generateIntern = function (intern) {
        return `
        <div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email:
                        <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    }

    const newHTML = [];
    
    newHTML.push(
        employees.filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
        .join(' ')
    )
    newHTML.push(
        employees.filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join(' ')
    )
    newHTML.push(
        employees.filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join(' ')
    )
    
    return newHTML.join('')
}

module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="./style.css">
        </head>

        <body>
            <div class="header-contianer">
                <div class="row">
                    <div class="header">
                        <h1 class="my-team">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="main-contianer">
                <div class="row">
                    <div class="content-area">
                    ${generateHTML(employees)}
                    </div> 
                </div>
            </div>
        </body>

    </html>  
    `
}