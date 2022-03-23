// extend Employee
const Manager = require('../lib/Manager');

// create manager object
test('creates a manager object', () => {
    const manager = new Manager('Kai', 40, 'kai.heavenslee@hs.com', 5);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role
test('gets role on employee', () => {
    const manager = new Manager('Kai', 40, 'kai.heavenslee@hs.com');

    expect(manager.getRole()).toEqual("Manager");
});
