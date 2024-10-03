//Creating a Employee Class
class Employee {
    constructor(name, salary, position, department){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
getDetails(){
    return `Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`;
}
}
//Creating a Department Class
class Department {
    constructor(name){
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee){
        if (employee instanceof Employee){
            this.employees.push(employee);
        } else {
            console.error("Invalid Employee");
        }
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
    }
//adding a department and employees 
const MarketingDepartment = new Department ("Marketing");
const Daffy = new Employee("Daffy Duck", 72000, "Marketing");
const Bugs = new Employee("Bugs Bunny", 90000, "Marketing");
const Porky = new Employee("Porky Pig", 65000, "Marketing");
