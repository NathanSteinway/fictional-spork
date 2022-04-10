const Intern = require('../lib/Intern');

test('Tests if school is created', () => {

    const testSchool = 'school name';

    const employeeInstance = new Intern('Ditto', 5, 'fake@anywhere.com', testSchool);

    expect(employeeInstance.school).toBe(testSchool);

});

test('Tests getSchool();', () => {

    const testSchool = 'school name';

    const employeeInstance = new Intern('Ditto', 5, 'fake@anywhere.com', testSchool);

    expect(employeeInstance.getSchool()).toBe(testSchool);

});

test('Tests getRole();', () => {

    const returnValue = 'Intern';

    const employeeInstance = new Intern('Ditto', 5, 'fake@anywhere.com', 'school name');

    expect(employeeInstance.getRole()).toBe(returnValue);

});

