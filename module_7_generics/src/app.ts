// Generics VS Union Types

// using union types
class DataStorage1 {
  // NOTE: this does not mean that it can only contain an array of strings, numbers or booleans
  // instead it means that we can have an array of string, numbers or booleans mixed
  private data: (string | number | boolean)[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage1 = new DataStorage1();
textStorage1.addItem("Jazper");
textStorage1.addItem("Max");
textStorage1.removeItem("Max");
console.log(textStorage1.getItems());

// using generics
// in here we are like telling the user which kind of data we wanna store (strings, numbers of booleans)
// and then we only allow them to add that exact type of data
class DataStorage2<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const booleanStorage = new DataStorage2<boolean>(); // we only allow boolean types
// booleanStorage.addItem("sasd"); // not allowed (STRING)
booleanStorage.addItem(false);
booleanStorage.addItem(true);
booleanStorage.removeItem(false);
console.log(booleanStorage.getItems());
