const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee()

    expect(typeof(employee)).toBe('object');
});