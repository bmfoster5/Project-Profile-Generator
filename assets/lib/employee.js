class Employee {
    constructor(name, ID, email) {
        this.email = email;
        this.name = name;
        this.ID = ID;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getID() {
        return this.ID;
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;
