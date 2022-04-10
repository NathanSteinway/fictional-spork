const Employee = require('../lib/Employee');

test('create Employee object', () => {

    const employee = new Employee()

    expect(typeof(employee)).toBe('object');

});

test('add name to Employee object', () => {

    const newName = "Nathan";

    const employeeObject = new Employee(newName);

    expect(employeeObject.getName()).toBe(newName);

});

test("add an ID to the Employee object", () => {

    const id = 5;

    const employeeInstance = new Employee("Nathan", id);

    expect(employeeInstance.id).toBe(id);
})

test("add an email to the Employee object", () => {

    const email = "steinway.nathan@gmail.com";

    const employeeInstance = new Employee("Nathan", 5, email);

    expect(employeeInstance.email).toBe(email);
})