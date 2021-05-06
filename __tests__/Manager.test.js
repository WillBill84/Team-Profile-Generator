const Manager = require('../lib/Manager');


test('create manager', () => {
    const manager = new Manager('Will', 10, 'email@email.com', 1);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
