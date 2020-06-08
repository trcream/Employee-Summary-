// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  getName() {
    // from inside the function and passing it back out
    return this.name;
  }
}

module.exports = Employee;
