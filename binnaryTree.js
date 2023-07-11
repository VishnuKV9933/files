class Node{
    constructor(data){
        this.data=data;
        this.left;
        this.right;
    }
}


class BinarySearchTree {
    constructor(){
        this.root =null;
    }
    insertion(data){
        let newNode=new Node(data);
        if(!this.root){
           this.root=newNode;
        }else{
            let current=this.root;
            while (true) {
                if (data === current.data) return undefined;
                if (data < current.data) {
                  if (!current.left) {
                    current.left = newNode;
                    return this;
                  }
                  current = current.left;
                } else {
                  if (!current.right) {

                    current.right = newNode;
                    return this;
                  
                }
                  current = current.right;
                }
              }
        }
        

    }

    contains(data){
   
        if(!this.root)return false

        let current=this.root
        while(current!=null){
            if(data<current.data){
                current=current.left
            }else if(data>current.data){
                current=current.right
            }else{
                return true
            }
        }
         return false        
    }
    
  
    removeData(data){
        this.remove(this.root,data)
    }

    remove(root,data){
        if(!root){
            return null
        }

        if(data<root.data){
            root.left=this.remove(root.left,data)
        }else if(data>root.data){
            root.right=this.remove(root.right,data)
        }else{

            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.data =this.minvalue(root.right)

            root.right=this.remove(root.right,data)

        }

        return root;

    }

    minvalue(root){
        let min =root.data

        while(!root.left){
            min=root.left.data
            root=root.left
        }
        return min;
    }

    BFS(){
        let currentNode = this.root;
        let results = [];  
        let queue = [];
        queue.push(currentNode);
       
        while(queue.length){
          currentNode = queue.shift();
         
        
          results.push(currentNode.data);
    
          if(currentNode.left) queue.push(currentNode.left);
          if(currentNode.right) queue.push(currentNode.right);
        }
        return results;
      }
  

    display(){
        console.log(this.root);
    }

   

}





let bt=new BinarySearchTree()
bt.insertion(30)

bt.insertion(40)

bt.insertion(20)
bt.insertion(50)

bt.insertion(10)



bt.removeData(50)
bt.insertion(50)
bt.insertion(20)
bt.display()
// console.log(bt.BFS())
// bt.BFS()





