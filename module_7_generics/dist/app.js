"use strict";
class DataStorage1 {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
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
class DataStorage2 {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const booleanStorage = new DataStorage2();
booleanStorage.addItem(false);
booleanStorage.addItem(true);
booleanStorage.removeItem(false);
console.log(booleanStorage.getItems());
