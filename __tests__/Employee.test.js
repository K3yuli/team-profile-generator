const Employee = require('../lib/Employee');

// // test creates employee
test('creates an employee', () => {
    const employee = new Employee('Kai', 40, 'kai.heavenslee@hs.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// test gets name using getName
test('gets employee name', () => {
    const employee = new Employee('Kai', 40, 'kai.heavenslee@hs.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// test gets ID using getId
test('gets employee ID', () => {
        const employee = new Employee('Kai', 40, 'kai.heavenslee@hs.com');

        expect(employee.getId()).toEqual(expect.any(Number));
    });

// test gets email using getEmail
test('get employee email', () => {
        const employee = new Employee('Kai', 40, 'kai.heavenslee@hs.com');

        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });

// test getRole returns 'Employee'
test('gets role of employee', () => {
    const employee = new Employee('Kai', 40, 'kai.heavenslee@hs.com');

    expect(employee.getRole()).toEqual("Employee");
});