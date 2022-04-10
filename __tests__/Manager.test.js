const Manager = require('../lib/Manager');

test("Tests office number creation", () => {

    const testOfficeNumber = 5;

    const employeeInstance = new Manager('Nathan', 5, 'steinway.nathan@gmail.com', testOfficeNumber);

    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);

});

test("Tests getRole();", () => {

    const returnValue = "Manager";

    const employeeInstance = new Manager("Nathan", 5, "steinway.nathan@gmail.com", 2);

    expect(employeeInstance.getRole()).toBe(returnValue);

});