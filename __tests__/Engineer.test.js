const Engineer = require('../lib/Engineer');


test('Tests getGitHub();' , () => {

    const testGithub = "username"

    const employeeObject = new Engineer('Ditto', "5", 'fake@anywhere.com', testGithub);

    expect(employeeObject.getGitHub()).toBe(testGithub)

});


test('Test getRole();', () => {

    const returnRole = "Engineer";

    const employeeObject = new Engineer('Ditto', "5", 'fake@anywhere.com', "testGithub");

    expect(employeeObject.getRole()).toBe(returnRole)

});