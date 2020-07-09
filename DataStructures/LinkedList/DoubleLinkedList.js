class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    };
}
class DLinkedList {
    constructor(value){
        this.head ={
        value: value,
        next: null,
        prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append = (value) =>{
        const NewNode = new Node(value);
        this.tail.next = NewNode;
        NewNode.prev = this.tail;
        this.tail = NewNode;
        this.length++;
        return this;
    }
    prepend = (value) =>{
        const NewNode = new Node(value)
        NewNode.next = this.head
        this.head.prev = NewNode;
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
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        holdingPointer.prev = newNode;
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
        leader.next.prev = leader
        this.length--
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
}

const myDLinkedList = new DLinkedList(10);
myDLinkedList.append(5);
myDLinkedList.append(16);
myDLinkedList.prepend(1);
myDLinkedList.insert(2,99);
console.log(myDLinkedList);
myDLinkedList.remove(3);
console.log(myDLinkedList.printList());
console.log(myDLinkedList);