// extend Employee
const Intern = require('../lib/Intern');

// create intern object
test('creates an Intern object', () => {
    const intern = new Intern('Kai', 60, 'kai.heavenslee@hs.com', 'HSPC');

    expect(intern.school).toEqual(expect.any(String));
});

// get school
test('gets employees school', () => {
    const intern = new Intern('Kai', 60, 'kai.heavenslee@hs.com', 'HSPC');

    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
});

// get role
test('gets role of employee', () => {
    const intern = new Intern('Kai', 40, 'kai.heavenslee@hs.com', 'HSPC');

    expect(intern.getRole()).toEqual("Intern");
});