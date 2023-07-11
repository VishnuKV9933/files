class Node{
    constructor(value){
        this.previous = null;
        this.data = value;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    construct(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
        }else{
            newNode.previous = this.tail;
            this.tail.next = newNode;
        }
        this.tail = newNode
    }

    AddANewNodeInTheBeginning(value){
        if(!this.head){
            this.construct(value)
        }else{
            const newNode = new Node(value)
             this.head.previous = newNode;
             newNode.next = this.head;
             this.head = newNode
        }
    }

    DeleteANodeFromTheTail(){
        if(!this.head){
            console.log("this LinkedList is empty")
        }else{
            this.tail.previous.next = null;
            this.previous = null;
            this.tail = this.tail.previous
        }
    }

    DeleteANodeFromTheHead(){
        if(!this.head){
            console.log("this LinkedList is empty")
        }else{
            this.head.next.previous = null;
            this.head =  this.head.next
        }
    }

    DeleteASpecificNode(value){
        if(!this.head){
            console.log("this linkedList is empty")
        }else{
          let current = this.head;
          while(current != null && value != current.data){
            current = current.next
          }
          if(!current){
            console.log("enter a valid data")
          }else if(!current.next){
            this.DeleteANodeFromTheTail()
          }else if(!current.previous){
            this.DeleteANodeFromTheHead()
          }else{
            current.previous.next = current.next;
            current.next.previous = current.previous
          }
        }
    }

    DeleteANodeBeforeANode(value){
          if(!this.head){
            console.log("this LinkedList is empty")
          }else{
            let current = this.head
            while(current != null && value != current.data){
                current = current.next
            }
            if(!current){
                console.log("enter a  valid data")
            }else if(!current.previous){
                console.log("there is no value before that")
            }else if(!current.previous.previous){
                this.DeleteANodeFromTheHead()
            }else{
                current.previous.previous.next = current;
                current.previous = current.previous.previous     
            }
          }
    }
    Traverse(){
        let current = this.head;
        if(!current){
            console.log("the LinkedList is empty");
        }else{
            while(current != null){
                console.log(current.data)
                current = current.next
            }
        }
    }

    ReverseTraverse(){
        let current = this.tail
        if(!current){
            console.log("this linkedList is empty")
        }else{
            while(current != null){
             console.log(current.data)
             current = current.previous
            }
        }
    }
}

const DL = new DoubleLinkedList()
DL.construct(12)
DL.construct(2)
DL.construct(867)
DL.construct(67)
DL.construct(32)
DL.construct(232)
DL.construct(15)
DL.Traverse()
console.log("=====================")
DL.DeleteANodeBeforeANode(15)
DL.Traverse()
