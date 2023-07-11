const {BST} = require("./construuctABST")

const bst = new BST()
bst.insertAValue(10)
bst.insertAValue(14)
bst.insertAValue(11)
bst.insertAValue(51)
bst.insertAValue(21)
bst.insertAValue(45)
bst.insertAValue(52)
bst.insertAValue(54)

const bst1 = new BST()
bst1.insertAValue(10)
bst1.insertAValue(14)
bst1.insertAValue(11)
bst1.insertAValue(51)
bst1.insertAValue(21)
bst1.insertAValue(45)
bst1.insertAValue(52)
bst1.insertAValue(54)

function areIdentical (root1,root2){
  if(!root1 && !root2) return true
  if(!root1 || !root2) return false
  if(root1.data == root2.data)  {
    return areIdentical(root1.left,root2.left) && areIdentical(root1.right,root2.right)
  }else{
    return false
  }
}

console.log(areIdentical(bst.theRoot(),bst1.theRoot()))
