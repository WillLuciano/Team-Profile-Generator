const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "1234";
    const employee = new Manager("Jose", 1, "josedoe@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Jose", 1, "josedoe@gmail.com", "josedoe");
    expect(employee.getRole()).toBe(role);
  });