class Company {
  constructor() {
    this.departments = {};
  }
  addEmployee(name, salary, position, department) {
    if (typeof salary !== "number" || salary < 0) {
      throw new Error("Invalid input!");
    } else if (typeof name !== "string" || name == "") {
      throw new Error("Invalid input!");
    } else if (typeof position !== "string" || name == "") {
      throw new Error("Invalid input!");
    } else if (typeof department !== "string" || name == "") {
      throw new Error("Invalid input!");
    } else {
      this.departments.name = name;
      this.departments.salary = salary;
      this.departments.position = position;
      this.departments.department = department;
      return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
  }

  bestDepartment() {}
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

//console.log(c.bestDepartment());
console.log(c.departments);
