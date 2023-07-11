// class Node{
//     constructor(data){
//         this.data=data;
//     }
// }
// function swap(array,i,j){
//     let temp=array[i]
//     array[i]=array[j]
//     array[j]=temp

// }

// class Tree{
//     constructor(){
//         this.root=null;
//     }
//     addNode(data, current = this.root){
//         let newNode = new Node(data)
//         if(!this.root){
//          this.root=newNode
//         }else{
         
//                 let direction =Math.random() < 0.5 ? "left": "right"
//                 if(!current[direction]){
//                     current[direction]=newNode
//                     return;
//                 }else{
//                     this.addNode(data,current[direction])
//                 }
//         }
//     }

//     search(data,current=this.root){
//         if(!current) return false
//         if(current.data==data)
//          {
//             return true
//         }
//          if(this.search(data,current.left)) return true
//          if(this.search(data,current.right)) return true
//          return false
//     }

//     // search(value,current = this.root){
//     //     if(!current) return false
//     //     if(current.data == value)  return true
//     //     if(this.search(value,current.left)) return true
//     //     if(this.search(value,current.right)) return true
//     //     return false
//     // }

// }


// class BST{
//     constructor(){
//     this.root =null;
//     }

//     insert(data){
      
//         let newNode =new Node(data)
//         if(!this.root){
//            this.root =newNode
//            return this
//         }

//         let current=this.root;
        
//         while(true){
//             if(data==current.data) return
//             if(data <current.data){
//                 if(!current.left) {
//                     current.left=newNode
//                     return this;
//                 }
//                 current=current.left
//             }else{
//                 if(!current.right){
//                     current.right=newNode;
//                     return this
//                 }
//                 current =current.right;
//             }
//         }

//     }

//     deletion(data){

//         this.remove(data,this.root)
//     }

//     remove(data,current){
//         if(!current){
//             return null
//         }
//         if(data<current.data){
//             current.left= this.remove(data,current.left)
//         }else if(data>current.data){
//             current.right= this.remove(data,current.right)
//         }else{
//           if(!current.left){
//             return current.right
//         }else if(!current.right)
//         {
//            return current.left
//         }else{
//             current.data=this.minvalu(current.right)
//             current.right= this.deletion(data,current.right)

//         }
//         }

        
//         return current
     


//     }

//     minvalu(root){
//         let min =root.data
//         while(!root){
//             min =root.left.data
//             root=root.left
//         }
//         console.log("min :"+min);
//         return min

//     }

//     display(){
//         console.log(this.root);
//     }

//     isBST() {
//         return this.isBSTHelper(this.root, -Infinity, Infinity);
//       }
    
//       isBSTHelper(node, minVal, maxVal) {
//         if (!node) {
//           return true;
//         }
//         if (node.data <= minVal || node.data >= maxVal) {
//           return false;
//         }
    
//         return this.isBSTHelper(node.left, minVal, node.data) &&
//          this.isBSTHelper(node.right, node.data, maxVal);
//       }


//  sum(){
//     return this.sumHelper(this.root)
//  }
//  sumHelper(root){
//     if(!root){
//         return 0
//     }
//     return root.data + this.sumHelper(root.left) + this.sumHelper(root.right)
//  }


// isCompleteBT(){
//     let queue=[{node:this.root ,number:1}]
//     let count =1;
//     while(queue.length){
//         let {node,number}=queue.shift()
//         if(number!==count){
//             return false
//         }
//         count++
//         if(node.left){
//             queue.push({node:node.left,number:number*2})
//         }
//         if(node.right){
//             queue.push({node:node.right,number:number*2+1})
//         }
//     }
//     return true
// }

// mirrorTree(root){
//     if(!root){
//         return
//     }
//     let temp= root.left;
//     root.left=root.right;
//     root.right=temp;

//       this.mirrorTree(root.left)
//       this.mirrorTree(root.right)
// }

// perfectsubTreecount(root){
//     if(!root){
//         return 0
//     } 
//    let left= this.perfectTree(root.left)
//    let right= this.perfectTree(root.right)
  
//    if(left!=right){
//     return 0 + this.perfectsubTreecount(root.left)+this.perfectsubTree(root.right)
//    }else{
//     return 1 + this.perfectsubTreecount(root.left)+this.perfectsubTree(root.right)
//    }
// }

// perfectTree(root){
//     if(!root){
//         return true
//     }
//     let left =this.length(root.left);
//     let right=this.length(root.right);
//     if(left!==right){
//         return false
//     }
//     return this.perfectTree(root.left)&& this.perfectTree(root.right)
// }
 
// length(root){
//     if(!root){
//         return 0
//     }
//   return 1 +  Math.max(this.length(root.left),this.length(root.right))  
//  }
// }

// class Trie{
//     constructor(){
//         this.root = new Map();
//     }

//     insert(string){

//         let  current=this.root;

//         for(let i =0;i<string.length;i++){
//             let char= string[i];
//             if(!current.has(char)){
//                 current.set(char,new Map())
//             }
//             current = current.get(char)
//         }
//         current.set("end",true)
//     }

   
// }

// class Heap{
//     constructor(array){
//         this.root=this.buildheap(array);
//     }
//     display(){
//         console.log(this.root);
//     }
//     buildheap(array){
//         this.root=array
//       for(let i=this.parent(array.length-1);i>=0;i--){
//         this.shiftDown(i)
//       }
//       return this.root
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     left(i){
//         return (i*2)+1
//     }
//     right(i){
//         return (i*2)+2
//     }
   
//     shiftDown(current){
//         let array= this.root;
//         let left=this.left(current)
//         let end=array.length-1

//         while(left<=end){
//             let change
//             let right=this.right(current)
//             if(right=>end&& array[left]>array[right]){
//                 change=left
//             }else{
//                 change=right
//             }

//             if(array[current]<array[change]){
//                swap(this.root,change,current)

//                current=change
//                left=this.left(current)

//             }else{
//                 return
//             }

//         }

//     }

// }

// let bst=new BST()
// bst.insert(50)
// bst.insert(30)
// bst.insert(60)
// bst.insert(55)
// // bst.insert(65)




// console.log((bst.root))

// console.log(bst.perfectsubTree(bst.root));
// import fetch from "node-fetch";
console.log("one");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

