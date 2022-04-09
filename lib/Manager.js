// Must require Employee.js bc this module extends it
const Employee = require('./Employee');

// Like so
class Manager extends Employee {

    constructor (name, id, email, officeNumber){

    // Calls on Manager's Parent (Employee) for the following data...
    super(name, id, email)

    // Sets officeNumber
    this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
};

module.exports = Manager;