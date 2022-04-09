// Required for Engineer to extend Employee
const Employee = require('./Employee');

class Engineer extends Employee {

    constructor (name, id, email, github) {

        // Calls on Engineer's Parent (Employee) for the following data...
        super(name, id, email)

        // Sets github to github so it can be used in getGitHub();
        this.github = github;

    }

    getGitHub() {
        return this.github
    }

    getRole(){
        return 'Engineer'
    }
};

module.exports = Engineer;