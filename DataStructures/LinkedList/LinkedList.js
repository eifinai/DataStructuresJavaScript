// let myLinkedList ={
//     head: {
//         value: 10,
//         next: {
//             value : 5,
//             next: {
//                 value : 16,
//                 next : null
//             }
//         }
//     }
// }
class Node{
    constructor(value){
        this.value = value,
        this.next = null
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
    // insert = (index, value) =>{
        
    // }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());