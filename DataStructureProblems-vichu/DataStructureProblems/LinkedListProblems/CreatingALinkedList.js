

class Node{
    constructor(value){
      this.data = value
      this.next = null
    }
}

class LinkedList{
     constructor(){
        this.head = null;
        this.tail = null
     }

    addANewNode(a){
        const newNode = new Node(a);
        if(!this.head){
            this.head = newNode
        }else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    displayTheNode(){
        if(this.head){
           let temp = this.head;
            while(temp){
                console.log(temp.data);
                temp = temp.next
            }
        }else{
            console.log("the LinkedList is empty")
        }
    }

    countOfTheNode(){
        let count=0
        if(this.head){
           let temp = this.head;
            while(temp){
                count++;
                temp = temp.next
            }
        }else{
            console.log("the LinkedList is empty")
        }
        return count;
    }

    reverseALinkedlist(currentNode = this.head){
        if(!currentNode){
           return;
        }else{
            this.reverseALinkedlist(currentNode.next);
            console.log(currentNode.data)
        }

    }

    deletedANode(value){
      let current = this.head;
      let previous ;

      if(!current){
        console.log("the LinkedList is empty")
      }else{
          while(current != null && current.data != value){
              previous = current;
              current = current.next;
          }
      }

      if(!current){
        console.log("the value is not present here")
      }else{
           previous.next = current.next;
           current.next = null;
      }
    }

    deleteFromTheTail(){
        let current = this.head
        if(!current){
            console.log("the LinkedList is empty")
        }else{
            while(current.next.next !=null){
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
    }

    deleteFromTheHead(){
       if(!this.head){
        console.log("the LinkedList is empty")
       }else{
           this.head = this.head.next
       }
    }

    insertANodeAtHead(a){
        const newNode = new Node(a);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
           this.head = newNode;
        }

    }

    insertAnewNodeAfterANode(value,newNodeValue){
        let current = this.head;
        if(!this.head){
            console.log("the Linked List is empty")
        }else{
            while(current != null && value != current.data ){
                current = current.next
            }
            if(!current){
               console.log("please enter a valid data")
            }else{
                if(!current.next){
                    this.addANewNode(newNodeValue)
                }else{

                    const newNode = new Node(newNodeValue);
                    newNode.next = current.next
                    current.next = newNode;
                }
            }
        }

    }

    insertAnewNodeBeforeANode(value,newValue){
        if(!this.head){
            console.log("the LinkedList is empty")
        }else{
            let current = this.head
            let previous;
            while(current != null && value != current.data){
                previous = current
                current = current.next;
            }
            if(!current){
                console.log("enter a valid data")
            }else{
                if(!previous){
                   this.insertANodeAtHead(newValue)
                }else{

                    const newNode = new Node(newValue);
                    newNode.next = current;
                    previous.next = newNode
                }
            }
        }
    }

    deleteANodeBeforeANode(value){
        if(!this.head){
            console.log("the LinkedList is empty")
        }else{
            let current = this.head;
            let previous;
            let prePrevious;
            while(current != null && value != current.data){
                prePrevious = previous;
                previous = current;
                current = current.next
            }
            if(!current){
                console.log("please enter a valid data")
            }else if(!previous){
                  console.log("there is no node before the head")   
            }else if(!prePrevious){
                  this.deleteFromTheHead() 
            }else{
                 prePrevious.next = current;
                 previous.next = null;
            }
        }
    }

    deleteANodeAfterANode(value){
         if(!this.head){
            console.log("the LinkedList is empty")
         }else{
            let current = this.head
            while(current !=null && value != current.data){
                current = current.next
            }
            if(!current){
                console.log("enter a valid value")
            }else if(!current.next){
                  console.log("there is no node after that")
            }else if(!current.next.next) {
                  this.deleteFromTheTail()
            }else{
                current.next = current.next.next;
            }
            
         }
    }

    deleteTheDuplicate(){
        if(!this.head){
            console.log("the LinkedList is empty")
        }else{
            let current = this.head;
            while(current != null){
               let checking =  current.next
                let previous;
                while(checking != null && checking.data != current.data){
                    previous = checking;
                    checking = checking.next;
                }
                 if(checking && !checking.next){
                      this.deleteFromTheTail()
                }else if(checking){
                    previous.next = checking.next;
                }
                current = current.next
            }
           
        }
    }

    sortTheLinkedListUsingBubble(){
        if(!this.head){
            console.log("the LinkedList is empty")
        }else{
            let current = this.head
            while(current != null){
                let swap = this.head;
                while(swap!=null){
                   if(swap.next && swap.data > swap.next.data){
                      let temp = swap.data;
                      swap.data = swap.next.data;
                      swap.next.data = temp
                   }
                   swap = swap.next;
                }
                current = current.next
            }
        }
    }


    findTheNthElement(Position){
        if(!this.head){
            console.log("the LinkedList is empty")
            
        }else if(Position > this.countOfTheNode()){
            console.log("enter a valid position")
        }
        else{
            let current = this.head;
            let count = 1;
            while(current != null && count != Position ){
                count++;
                current = current.next;
            }
            console.log(current.data)
        }
    }

    findTheNthElementFromTheLast(position){
        if(position < 0){
            console.log("enter a valid position")
        }else{
            let originalPosition = this.countOfTheNode() - position
            if(originalPosition < 0){
             console.log("enter a valid positon")
            }else{
                this.findTheNthElement(originalPosition)
            }
        }
    }

    findTheMiddleElementOfTheList(){
        let Middle = Math.floor(this.countOfTheNode()/2)+1
        this.findTheNthElement(Middle)
    }
    

    convertArrayToLinkedList(array){
        for(let i=0;i<array.length;i++){
            this.addANewNode(array[i])
        }
        this.displayTheNode()
    }


    convertThelinkedListToArray(){
        
        let current = this.head;
        if(!current){
            return ("there is no linked List  add One and do the operation")
            
        }else{
            let array =[];
            while(current != null){
              array.push(current.data)
              current = current.next
            }
            return array;
        }
    }

    insertANodeAtTheGivenPosition(value,position){
        if(position > this.countOfTheNode() || 0 > position){
               console.log("enter a valid position")
        }else{

            if(!this.head){
               this.addANewNode(value)
               console.log("this is the new Node so the added as the first node")
            }else{
               let current = this.head;
               let count = 1;
               while( count != position){
                  current = current.next;
                  count++
               }
               this.insertAnewNodeBeforeANode(current.data,value);
            }
        }
    }




}

const LL = new LinkedList();
LL.addANewNode(52)
LL.addANewNode(72)
LL.addANewNode(2)
LL.addANewNode(12)
LL.addANewNode(1000)
LL.insertANodeAtTheGivenPosition(20,3)
LL.displayTheNode()

