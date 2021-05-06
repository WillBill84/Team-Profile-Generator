const Employee = require('../lib/Employee');

test("create employee", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

/*
test('employee name test', () => {
    const employee = new Employee('Will');
    expect(employee.getName()).toEqual(expect.any(String));
});

 */