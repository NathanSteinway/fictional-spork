// Required for Engineer to extend Employee
const Employee = require('./Employee');

class Intern extends Employee {

    constructor (name, id, email, school) {

        // Calls on Employee for the following data...
        super(name, id, email)

        // Sets this.school to school so that it can be used in getSchool();
        this.school = school;

    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
};

module.exports = Intern;