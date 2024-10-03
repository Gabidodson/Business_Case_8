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
    calculateTotalSalaryWithBonus(){
        return this.employees.reduce((total, employee)=>{
            if (employee instanceof Manager){
                return total + employee.salary + employee.bonus;
            }else{
            return total + employee.salary;
            }
        },0);
    }
    }
//adding a department and employees 
const MarketingDepartment = new Department ("Marketing");
const Daffy = new Employee("Daffy Duck", 72000, "Marketing");
const Bugs = new Employee("Bugs Bunny", 90000, "Marketing");
const Porky = new Employee("Porky Pig", 65000, "Marketing");

//Creating a Manager class that inherits from Employee
class Manager extends Employee {
    constructor(name, salary, position, department, bonus){
super(name, salary, position, department);
this.bonus = bonus;
    }
    getDetails(){
        const employeeDetails = super.getDetails();
        return `${employeeDetails}, Bonus:$${this.bonus}`;

    }
}

//Handle Bonuses for Managers
//added to task 2

//Create and Manage Departments & Employees
let engineeringDepartment = new Department ("Engineering");
let financeDepartment = new Department ("Finance");

let ScoobyDoo = new Manager("Scooby Doo", 105000, "Engineering");
let PatrickStar = new employee("Patrick Star", 45000, "Engineering");
let MarvinMartian = new employee("Marvin Martin", 82000, "Engineering");

let SpeedyGonzales = new Manager("Speedy Gonzales", 92000, "Finance");
let TweetyBird = new employee("Tweety Bird", 74000, "Finance");
let PepeLePew = new employee("PepeLePew", 54000, "Finance");

engineeringDepartment.addEmployee(ScoobyDoo);
engineeringDepartment.addEmployee(PatrickStar);
engineeringDepartment.addEmployee(MarvinMartian);

financeDepartment.addEmployee(SpeedyGonzales);
financeDepartment.addEmployee(TweetyBird);
financeDepartment.addEmployee(PepeLePew);

console.log("Engineering Department:");
console.log(`Total salary: $${engineeringDepartment.getDepartmentSalary()}`);
console.log(`Total salary with bonuses: $${engineeringDepartment.calculateTotalSalaryWithBonus}`);

console.log("Finance Department:");
console.log(`Total salary: $${financeDepartment.getDepartmentSalary()}`);
console.log(`Total salary with bonuses: $${financeDepartment.calculateTotalSalaryWithBonus()}`);

