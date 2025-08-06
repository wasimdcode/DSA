// Creating a custom Array and Custom methods for Array
// Creating a class for array
class myArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    // This is for adding the item at the end of an array or last index
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    // This is for Getting the Item by entering the index
    get(index) {
        return this.data[index];
    }
    // This if for removing the last item in an array or last index remove
    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    // This is for removing the first item in an array and adjusting the index of rest of the items
    shift() {
        const itemRemoved = this.data[0];
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return itemRemoved;
    }
    // This is for removing an item by index and adjusting their indexes 
    delete(index) {
        const deleteItem = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return deleteItem;
    }
}
// Creating an instance of our class and calling constructor
const myNewArray = new myArray();
// adding values into an array by using push function
console.log('Index -> ', myNewArray.push("wasim"));
console.log('Index -> ', myNewArray.push("rihan"));
console.log('Index -> ', myNewArray.push(10));
console.log('Index -> ', myNewArray.push(true));
console.log('Index -> ', myNewArray.push(null));
// Printing the Array
console.log(myNewArray);
// Printing an item by index
console.log('Founded Item -> ', myNewArray.get(1));
// Removing the last item using Pop
console.log('Removed -> ', myNewArray.pop());
console.log(myNewArray);
// Removing First Item and Shifting their Indexes
console.log('Removed -> ', myNewArray.shift());
console.log(myNewArray);
// Deleting an item by taking the input index and fixing the Indexex of array
console.log('Removed -> ', myNewArray.delete(1));
// This is the Last array that we have after doing all the operations
console.log(myNewArray);
