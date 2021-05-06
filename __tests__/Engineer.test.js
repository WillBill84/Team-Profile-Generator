const Engineer = require('../lib/Engineer');

test('create engineer', () => {
    const engineer = new Engineer('Will', 10, 'email@email.com', 'WillBill84');
    expect(engineer.github).toEqual(expect.any(String));
});
