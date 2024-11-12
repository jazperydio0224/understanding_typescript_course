// Typeguards
type Admin1 = {
  name: string;
  privileges: string[];
};

type Employee1 = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee1 = Admin1 & Employee1;

const e2: ElevatedEmployee1 = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable1 = string | number;

function add(a: Combinable1, b: Combinable1) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee1 | Admin1;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving....");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(500);
  // }

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
