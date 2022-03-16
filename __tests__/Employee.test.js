const Employee = require('../lib/Employee');

// // test creates employee
test('creates an Employee', () => {
    const employee = new Employee('');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// test gets name using getName

// test gets ID using getId

// test gets email using getEmail

// test getRole returns 'Employee'