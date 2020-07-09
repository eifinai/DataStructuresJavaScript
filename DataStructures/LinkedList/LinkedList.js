class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value){
        this.head ={
        value: value,
        next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append = (value) =>{
        const NewNode = new Node(value);
        this.tail.next = NewNode;
        this.tail = NewNode;
        this.length++;
        return this;
    }
    prepend = (value) =>{
        const NewNode = new Node(value)
        NewNode.next = this.head
        this.head = NewNode;
        this.length++;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert = (index, value) =>{
        if (index >= this.length){
            return this.append(value);
        }
        let newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;

    }
    remove = (index) =>{
        if(index === 0){
            this.head = this.head.next;
            return
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = holdingPointer.next;
    }
    traverseToIndex = (index) => {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    reverse() {
        if (!this.head.next) {
          return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
    
        while(second) {
          const temp = second.next;
          second.next = first;
          first = second;
          second = temp;
        }
    
        this.head.next = null;
        this.head = first;
        return this.printList();
      }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
console.log(myLinkedList.printList());
myLinkedList.remove(0);
console.log(myLinkedList.printList());