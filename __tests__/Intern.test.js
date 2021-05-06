const Intern = require('../lib/Intern');

test('create intern', () => {
    const intern = new Intern('Will', 10, 'email@email.com', 'Monash Uni');
    expect(intern.school).toEqual(expect.any(String));
});

