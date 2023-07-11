class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  display() {
    let temp = this.head;

    if (this.head == null) {
      console.log("no data");
    } else {
      while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }

  deleteNode(data) {
    let temp = this.head;
    let prev = null;

    if (temp != null && temp.data == data) {
      this.head = this.head.next;
      return;
    }

    while (temp != null && temp.data != data) {
      prev = temp;
      temp = temp.next;
    }
    if (temp == null) {
      console.log("there is no data");
      return;
    }
    if (temp == this.tail) {
      this.tail = prev;
      this.tail.next = null;
      return;
    }
    prev.next = temp.next;
  }

  insertBefore(data, prevTo) {
    let newNode = new Node(data);
    let temp = this.head;
    let prev=null;

 

    if(temp != null && temp.data == prevTo) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    while(temp != null && temp.data!=prevTo){
      prev=temp;
      temp = temp.next;
    }
    if(temp==null){
      console.log("there is no given element");
      return;
    }

    newNode.next=temp;
    prev.next=newNode;
  }

  arrayConverter(array){

    for(let i=0;i<=array.length-1;i++){
      let newNode = new Node(array[i]);
      if(this.head==null){
        this.head=newNode;
      }else{
      this.tail.next=newNode;
      }
     this.tail=newNode;
    }
  }

  removeDuplicate(){

    let current=this.head;
    let prev =null;

    while(current!=null){

      let temp= current.next
      let flag=true


      while(temp!=null&&temp.data!=current.data){
        prev=temp;
        temp=temp.next;
      }
    
     if(temp!=null){
      prev.next=temp.next;
    flag=false
     }

     if(flag){
      current=current.next;
     }
      

    }
    
  }


  reverse(temp=this.head){
  
   if(!temp){
    return;
   }else{

    this.reverse(temp.next)
    console.log(temp.data);


   }
  }

}








let list = new LinkedList();



// list.add(2);
// list.insertBefore(8, 2);



list.arrayConverter([1,3,8,6,8,4,8,7])

// list.removeDuplicate()

list.display();
// list.reverse()
// list.display();

