const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "Hogwarts School of Witchcraft";
    const employee = new Intern("Ivelisse", 1, "ivelisse.doe@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Ivelisse", 1, "ivelisse.doe@gmail.com", "ivelissedoe");
    expect(employee.getRole()).toBe(role);
  });