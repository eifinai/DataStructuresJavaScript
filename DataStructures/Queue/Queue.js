class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek = () =>{
        if(!this.first){
            return "nananina"
        }
        return this.first.value;
    }
    enqueue = (value) =>{
        const NewNode = new Node(value)
        if(this.length === 0){
            this.first = NewNode;
            this.last = NewNode;
            this.length++;
            return
        }
        this.last.next = NewNode
        this.last = NewNode;
        this.length++;
    }
    dequeue = () =>{
        const value = this.first.value;
        this.first = this.first.next;
        return value
    }
    printList(){
        const array = [];
        let currentNode = this.first;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}
const MyQueue = new Queue();
console.log(MyQueue.peek())
MyQueue.enqueue(10)
MyQueue.enqueue(15);
MyQueue.enqueue(11);
console.log(MyQueue.printList());
console.log(MyQueue.peek())
console.log(MyQueue.dequeue());
