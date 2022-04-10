const Manager = require('../lib/Manager');

test("Tests office number creation", () => {

    const testOfficeNumber = 5;

    const employeeInstance = new Manager('Ditto', 5, 'fake@anywhere.com', testOfficeNumber);

    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);

});

test("Tests getRole();", () => {

    const returnValue = "Manager";

    const employeeInstance = new Manager("Ditto", 5, "fake@anywhere.com", 2);

    expect(employeeInstance.getRole()).toBe(returnValue);

});