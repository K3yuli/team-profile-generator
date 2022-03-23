const Engineer = require('../lib/Engineer');

// extend Employee
test('creates an engineer object', () => {
    const engineer = new Engineer('Nariko', 30, 'nariko.swordz@hs.com', 'hs00swordz');

    expect(engineer.github).toEqual(expect.any(String));
});

// test fot github // github username


// test for getGithub()
test('gets engineer github', () => {
    const engineer = new Engineer('Nariko', 30, 'nariko.swordz@hs.com', 'hs00swordz');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// test for getRole() // overridden to return 'Engineer'
test('gets role of engineer', () => {
    const engineer = new Engineer('Nariko', 30, 'nariko.swordz@hs.com', 'hs00swordz');

    expect(engineer.getRole()).toEqual("Engineer");
});