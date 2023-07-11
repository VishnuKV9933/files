class Node{
    constructor(value){
        this.data  = value;
        this.left  = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insertANode(value,currentNode = this.root){
      const newNode = new Node(value)
      if(!this.root) {
        this.root = newNode
      }else{
        const direction = Math.random() < 0.5 ? "left" : "right"
        if(!currentNode[direction]){
            currentNode[direction] = newNode
            return;
        }else{
            this.insertANode(value,currentNode[direction])
        }
      }
    }

    search(value,currentNode = this.root){
        if(!currentNode) return false
        if(currentNode.data == value)  return true
        if(this.search(value,currentNode.left)) return true
        if(this.search(value,currentNode.right)) return true
        return false
    }

    
}


const bt = new BinaryTree()
bt.insertANode(10)
bt.insertANode(15)
bt.insertANode(20)
bt.insertANode(1)
bt.insertANode(2)

bt.search(23)







