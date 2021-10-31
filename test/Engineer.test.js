const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "jamesdoe";
    const employee = new Engineer("James", 1, "jamesdoe@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("James", 1, "jamesdoe@gmail.com", "jamesdoe");
    expect(employee.getRole()).toBe(role);
  });