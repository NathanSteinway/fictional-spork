const Employee = require('../lib/Employee');

test('create Employee object', () => {

    const employee = new Employee()

    expect(typeof(employee)).toBe('object');

});

test('add name to Employee object', () => {

    const newName = "Ditto";

    const employeeObject = new Employee(newName);

    expect(employeeObject.getName()).toBe(newName);

});

test('add an ID to the Employee object', () => {

    const id = 5;

    const employeeInstance = new Employee("Ditto", id);

    expect(employeeInstance.id).toBe(id);
})

test('add an email to the Employee object', () => {

    const email = "fake@anywhere.com";

    const employeeInstance = new Employee("Ditto", 5, email);

    expect(employeeInstance.email).toBe(email);
})

// Test functions

test('Tests getName();', () => {

    const testName = "Ditto";

    const employeeInstance = new Employee(testName);

    expect(employeeInstance.getName()).toBe(testName);

})

test('Tests getID();', () => {

    const testID = 5;

    const employeeInstance = new Employee("Ditto", testID);

    expect(employeeInstance.getId()).toBe(testID);

})

test('Tests getEmail();', () => {

    const testEmail = "fake@anywhere.com";

    const employeeInstance = new Employee("Ditto", 5, testEmail);

    expect(employeeInstance.getEmail()).toBe(testEmail);

})

test('Testing role.', () => {

    const returnValue = "Employee";

    const employeeInstance = new Employee("Ditto", 5, "fake@anywhere.com");

    expect(employeeInstance.getRole()).toBe(returnValue);
    
})