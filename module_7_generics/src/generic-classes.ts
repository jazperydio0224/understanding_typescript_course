// Generic Classes - when we don't care about its data type (could be anything)

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // dealing with objects (important to learn about non-primitive data types in javascript)
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
// setting the data type of DataStorage class to type 'string'
const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

// setting the data type of DataStorage class to type 'number'
const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();
// declaring the object in a variable will allow us
// to track the exact same object in memory
const maxObj = { name: "Max" };
objStorage.addItem(maxObj);
objStorage.addItem({ name: "Manu" });
// ...
objStorage.removeItem(maxObj);
console.log(objStorage.getItems());

// or use DataStorage<T extends string | number | boolean> is only applicable to primitive data type only
