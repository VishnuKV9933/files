class Node{
    constructor(value){
        this.data = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insertAValue(data){
        let currentNode = this.root;
        const newNode = new Node(data)
        if(!currentNode) {
            this.root = newNode;
            return
        }

        while(true){
            if(data < currentNode.data){
              if(currentNode.left == null){
                currentNode.left = newNode
                break;    
            } 
              else currentNode = currentNode.left
            }else{
                if(currentNode.right == null){
                    currentNode.right = newNode
                    break;
                } 
                else currentNode = currentNode.right
            }
        }
    }

    HeightOfTheTree(currentNode = this.root){
        if(!currentNode) return 0;
        return 1 + Math.max(this.HeightOfTheTree(currentNode.left),this.HeightOfTheTree(currentNode.right))
    }

    contains(){
        let currentNode  = this.root
        if(!currentNode) return "Enter a insert a value first"

        while(currentNode != null){
            if(data < currentNode.data) currentNode = currentNode.left
            else if(data > currentNode.data) currentNode = currentNode.right
            else return true
        }
        return false
    }

    remove(data){
        if(!this.root) return "there is no element in  the tree"
        this.removeHelper(data, this.root , null)
    }

    removeHelper(data, currentNode, parentNode){
         while(currentNode != null){
         if(data < currentNode.data){
            parentNode  = currentNode
            currentNode = currentNode.left
         }else if(data > currentNode.data){
            parentNode = currentNode
            currentNode = currentNode.right
         }else{
            if(currentNode.left != null && currentNode.right != null ){
                currentNode.data = this.getMin(currentNode.right)
                this.removeHelper(currentNode.data,currentNode.right,currentNode)
            }else{
                if(parentNode == null){
                      if(currentNode.right == null) this.root = currentNode.left
                      else this.root = currentNode.right
                }else{
                    if(parentNode.left == currentNode){
                        if(currentNode.right == null) parentNode.left = currentNode.left
                        else parentNode.left = currentNode.right  
                    }else{
                        if(currentNode.right == null) parentNode.right = currentNode.left
                        else parentNode.right = currentNode.right  
                    }
                }
            }
            break;
         }
    }
}

getMin(currentNode){
    if(currentNode.left == null) return currentNode.data
    else return this.getMin(currentNode.left)
}

inOrder(currentNode = this.root){
    if(currentNode != null){
        this.inOrder(currentNode.left)
        console.log(currentNode.data)
        this.inOrder(currentNode.right)
    }
}

preOrder(currentNode = this.root){
    if(currentNode != null){
        console.log(currentNode.data)
        this.preOrder(currentNode.left)
        this.preOrder(currentNode.right)
    }
}

postOrder(currentNode = this.root){
    if(currentNode != null){
        this.postOrder(currentNode.left)
        this.postOrder(currentNode.right)
        console.log(currentNode.data)
    }
}

getClosestValueOrTheExactValue(value){
  if(!this.root) return "the tree is empty"
  let closest = this.root.data
  let currentNode = this.root
  while(currentNode != null){
    if(Math.abs(currentNode.data - value) < Math.abs(closest-value) ){
          closest = currentNode.data
    }
    if(currentNode.data < value) currentNode = currentNode.right
    else if(currentNode.data > value) currentNode = currentNode.left
    else return currentNode.data
  }
  return closest
}

theRoot(){
    return this.root
}
}


module.exports = {BST}
