const Employee = require('./Employee');

// 
class Manager extends Employee {
    constructor (nameInput, idInput, emailInput, officeNumberInput) {
        // call employee constructor
        super(nameInput, idInput, emailInput);
        this.officeNumberInput = officeNumberInput;
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;