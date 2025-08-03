class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){
        if(!this.head) return null;
        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current.value;
    }
}
const myLinkedList = new linkedList(1);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
console.log(myLinkedList.pop());
console.log(myLinkedList)