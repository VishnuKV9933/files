class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.previous=null;
    }
}
class Stack{
    constructor(){
        this.top=null
    }


    push(data){
        let newNode=new Node(data)
        if(this.top==null){
        this.top=newNode;
        }else{
            this.top.previous=newNode;
            newNode.next=this.top;
            this.top=newNode;
        }
    }

    pop(){
        
        if(this.top==null){
            console.log("stack is underFlow");
        }else{
            this.top=this.top.next;
            this.top.previous=null
        }
    }

    display(){
        
        if(this.top==null){
            console.log("empty stack");
        }else{

            let current= this.top;
            while(current!=null){
                console.log(current.data);
                current=current.next;
               
            }

        }
    }

    peek(){
        if(this.top == null){
            console.log("stack is underFlow")

        }else{
            console.log("peek element:" +this.top.data);
        }
    }



}

let st =new Stack();
st.push(10)
st.push(11)
st.push(12)
st.push(13)

st.display();
