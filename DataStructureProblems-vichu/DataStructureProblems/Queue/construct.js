class Node{
    constructor(value){
        this.data = value;
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
    }

    enqueue(data){
        const newNode = new Node(data)
        if(!this.front) this.front = newNode
        else{
            this.back.next = newNode
        }
        this.back = newNode
    }

    dequeue(){
        if(!this.front) return "the queue is empty"
        this.front = this.front.next
    }

    traverse(){
        let temp = this.front
        if(!temp) return "the queue is empty"

        while(temp != null){
            console.log(temp.data)
            temp = temp.next
        }
    }
    
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(5)
queue.enqueue(3)
queue.enqueue(8)
queue.enqueue(4)
queue.enqueue(35)
queue.enqueue(2)
queue.dequeue()
queue.traverse()