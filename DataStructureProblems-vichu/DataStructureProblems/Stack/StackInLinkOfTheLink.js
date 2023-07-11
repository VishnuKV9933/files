class Node{
     constructor(value){
        this.data = value;
        this.next = null;
     }
}

class Stack{
   constructor(){
    this.top = null;
   }



   push(data){
    const newNode = new Node(data)
    if(!this.top){
        this.top = newNode
    }else{
        newNode.next = this.top
        this.top = newNode
    }
   }



   pop(){
    if(!this.top){
        return "stack is empty"
    }
    this.top = this.top.next;
   }



   peek(){
    if(!this.top) return "stack is empty"
    return this.top.data
   }

   count(){
    let temp = this.top
    if(!temp) return "the stack is empty"
   let count =0;
    while(temp != null){
       count++;
        temp = temp.next
    }
    return count
   }


   isEmpty(){
    if(!this.top) return true
    return false
   }

 

   traverse(){
    let temp = this.top
    if(!temp){
        return "the stack is empty"
    }

    while(temp != null){
        console.log(temp.data)
        temp = temp.next
    }
   }



   reverseTraverse(temp = this.top){
    if(!temp){
        return;
    }
    this.reverseTraverse(temp.next)
       console.log(temp.data)
   }



   convertStackIntoArray(){
    if(!this.top){
        return "stack is empty"
    }
    let temp = this.top
    let array = []
    while(temp != null){
          array.push(temp.data)
          temp = temp.next
    }
    return array;
   }

   sortTheStack(){
    if(!this.top) return "the stack is empty"
    let temp = this.top
    while(temp != null){
        let temp2 = this.top
        while(temp2 != null){
            if(temp2.next != null && temp2.data > temp2.next.data) {
                let swap = temp2.data
                temp2.data = temp2.next.data
                temp2.next.data = swap
            }
            temp2 = temp2.next
        }
        temp = temp.next
    }
   }




   convertArraytoStack(arr){
     for(let i =0;i<arr.length;i++){
        this.push(arr[i]);
     }
   }


}


module.exports = {Stack}
