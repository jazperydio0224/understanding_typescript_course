abstract class Department {
  // static property
  static fiscalYear = 2020;
  //   private readonly id: string;
  //   name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = name;
    // console.log(Department.fiscalYear); use the class if you want to access static properties/methods
  }

  // static method
  static createEmployee(name: string) {
    return { name: name };
  }

  // using an abstract function that is going to be overwritten by the inheriting Classes
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// inheritance - gets everything from the base class (Department)
// including its constructor
class ITDepartment extends Department {
  admins: string[];
  // whenever you add your own constructor in a class that inherits from
  // another class, you have to add 'super' in the inheriting class and you have to execute it like a function
  constructor(id: string, admins: string[]) {
    // calls the constructor of the base class from the subclass
    // NOTE: you have to call 'super' first in your constructor before you do anything with the 'this' keyword
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

// we call it directly on the class (Department) without the 'new' keyword
// and therefore we use the class as somewhat of a grouping mechanism
const employee1 = Department.createEmployee("Max");
console.log(employee1);
// access the property without instantiating it
console.log(Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

it.describe();
it.printEmployeeInformation();

console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string;
  // store a static property of the instance itself
  // but is only accessible from inside the class
  private static instance: AccountingDepartment;

  // NOTE: ACCESS IT AS A PROPERTY (NO PARENTHESIS)
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  // setting the constructor as private so we don't have access to
  // the constructor of the Class
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  // use a static method to get the instance of the Class
  /*
  1. this in Non-Static (Instance) Methods:
     In a non-static method, this refers to the instance of the class on which the method is called. 
     This means that this represents the current object or instance.

        class MyClass {
        value: number;

        constructor(value: number) {
        this.value = value;
        }

        // Non-static (instance) method
        printValue() {
        console.log(this.value);
        }
        }

        const myInstance = new MyClass(42);
        myInstance.printValue(); // 'this' refers to 'myInstance'

     In the example above, when printValue is called on myInstance, this inside printValue refers to myInstance.  


  2. this in Static Methods:
     In a static method, this does not refer to an instance of the class; instead, 
     it refers to the class itself. Static methods are called on the class rather 
     than on an instance, so they don't have access to instance-specific properties or methods.

        class MyClass {
        static staticMethod() {
        console.log(this);
        }
        }

        MyClass.staticMethod(); // 'this' refers to 'MyClass'

     In the example above, when staticMethod is called on the class MyClass, 
     this inside staticMethod refers to MyClass.
  */
  static getInstance() {
    // return the instance that we already have
    if (AccountingDepartment.instance) {
      return this.instance;
    }

    // or create a new one if we don't have it yet
    // accessible only in the Class itself
    // this can only run once since it will return the existing instance
    // once we instantiate it
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new AccountingDepartment("d2", []);
// implementing the singleton pattern
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
// same content
console.log(accounting);
console.log(accounting2);

// using the setter function (access it like a property)
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
// ACCESS THE getter method as a property
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
