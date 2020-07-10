class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek = () =>{
        if(!this.top){
            return "nananina"
        }
        return this.top.value;
    }
    push = (value) =>{
        const NewNode = new Node(value)
        if(this.length === 0){
            this.top = NewNode;
            this.bottom = NewNode;
            this.length++;
            return
        }
        NewNode.next = this.top
        this.top = NewNode;
        this.length++;
    }
    pop = () =>{
        const value = this.top.value;
        this.top = this.top.next;
        return value
    }
    printList(){
        const array = [];
        let currentNode = this.top;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const MyStack = new Stack();
console.log(MyStack.peek())
MyStack.push(10)
MyStack.push(15);
MyStack.push(11);
console.log(MyStack.printList());
console.log(MyStack.peek());
console.log(MyStack.pop());
console.log(MyStack.printList());