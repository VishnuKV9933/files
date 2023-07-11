// const {swap} = require("../Sorting/swap")

// let array =[23,3,16,2];

// for(i=0;i<array.length;i++){
//     for(j=0;j<array.length;j++){
//         if(array[j] > array[j+1]){
//             let temp = array[j];
//             array[j] = array[j+1];
//             array[j+1] = temp;
//         }
//     }
// }


// let left = 0;
// let right = array.length
// let target = 16

// while(left<right){
//     let middle = (left + right)/2;
//     if(array[middle] == target){
//        console.log(`element found at position ${ middle }`)
//        break;
//     }else if(array[middle] > target){
//         right = middle-1
//     }else if(array[middle] < target){
//         left = middle +1;
//     }
// }



// for(let i =0;i<array.length;i++){
//     for(let j=0;j<array.length-i;j++){
//         if(array[j] > array[j+1]){
//             swap(array,j,j+1)
//         }
//     }
// }


// for(let i =0;i<array.length;i++){
//     let smallest = i;
//     for(let j =i;j<array.length;j++){
//      if(array[j] < array[smallest]) smallest = j;
//     }
//     swap(array,i,smallest)
// }


// for(let i =1;i<array.length;i++){
//     let current = array[i]
//     let j = i-1; 
//     while(j >=0 && array[j] > current){
//         array[j+1] = array[j]
//         j--;
//     }
//     array[j+1] = current
// }

// console.log(mergu(array))


// function quicku(array,left=0,right=array.length-1){
//     if(left < right){
//         let pivoteshKumar = divorce(array,left,right)
//         quicku(array,left,pivoteshKumar-1)
//         quicku(array,pivoteshKumar+1,right)
//     }
//     return array
// }

// function divorce(array,left,right){
//     let pivu = array[right]
//     let i = left;
//     for(let j=left ; j<right ; j++){
//            if(pivu > array[j]){
//             swap(array,i,j)
//             i++
//            }
//     }
//     swap(array,i,right)
//     return i;
// }


// function mergu(array){
//     if(array.length <= 1) return array
//     let middu = Math.ceil((array.length-1)/2)
//     let leftArru = array.slice(0,middu)
//     let rightArru = array.slice(middu,array.length)
//     return joinesh(mergu(leftArru),mergu(rightArru))
// }

// function joinesh(left,right){
//     let newArru = []
//     let j=0;
//     let i=0;
//     while(i<left.length && j<right.length){
//         if(left[i] > right[j]) newArru.push(right[j++])
//         else newArru.push(left[i++])
//     }
//     while(i < left.length) newArru.push(left[i++])
//     while(j < right.lenght) newArru.push(right[j++]) 

//     return newArru
// }





// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let sumOfTheLetter = 0
//         for(let i=0;i<key.length;i++){
//             sumOfTheLetter += key.charCodeAt(i)
//         }
//         return sumOfTheLetter % size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         let index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index = this.hash(key)
//         this.table[index] = undefined
//     }

//     traverse(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]) console.log([i] +" " + this.table[i])
//         }
//     }
// }

// class Node{
//     constructor(value){
//     this.data = value;
//     this.next = null; 
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null
//         this.subStack = new Stack2();
//     }

//     push(value){
//         const newNode = new Node(value)
//         if(!this.top) this.top = newNode
//         else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//     }

//     pop(){
//         if(!this.top) return null
//         let top =  this.top.data
//         this.top = this.top.next
//         return top; 
//     }

//     peek(){
//         return this.top.data
//     }

//     traverse(){
//         if(!this.top) return "the stack is empty"
//         let temp = this.top
//         while(temp != null){
//             console.log(temp.data)
//             temp = temp.next
//         }
//     }

//     undo(){
//         let undo = this.pop()
//         if(undo){
//               this.subStack.push(undo)
//         }else{
//             console.log("first push the value")
//         }
       
//     }

//     redo(){
//         let redo = this.subStack.pop()
//         if(redo){
//             this.push(redo)
//         }else{
//             console.log("do something then we can redo")
//         }
//     }
// }

// class Stack2{
//     constructor(){
//         this.top = null
//         }

//     push(value){
//         const newNode = new Node(value)
//         if(!this.top) this.top = newNode
//         else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//     }

//     pop(){
//         if(!this.top) return null
//         let top =  this.top.data
//         this.top = this.top.next
//         return top;
//     }
// }

// const stack = new Stack()
// stack.push(12)
// stack.push(33)
// stack.push(45)
// stack.traverse()
// stack.undo()
// console.log("==========")
// stack.traverse()
// stack.undo()
// console.log("==========")
// stack.traverse()
// stack.undo()
// console.log("==========")
// stack.traverse()
// stack.undo()
// console.log("==========")
// stack.traverse()
// stack.redo()
// console.log("==========")
// stack.traverse()
// stack.redo()
// console.log("==========")
// stack.traverse()
// stack.redo()
// console.log("==========")
// stack.traverse()
// stack.redo()
// console.log("==========")
// stack.traverse()







// function quickSortish(array,left=0,right=array.length-1){
//     if(left < right){
//         let pivotHome = partition(array,left,right)
//         quickSortish(array,left,pivotHome-1)
//         quickSortish(array,pivotHome+1,right)
//     }
//     return array
// }

// function partition(array,left,right){
//     let pivot = array[right]
//     let i = left
//     for(let j=left;j<right;j++){
//         if(array[j] < pivot){
//             swap(array,i,j)
//             i++
//         }
//     }
//     swap(array,i,right)
//     return i
// }


// function merge(array){
//     if(array.length <= 1) return array
//     let middle = Math.ceil((array.length-1)/2)
//     let right = array.slice(0,middle)
//     let left = array.slice(middle,array.length)

//     return join(merge(right),merge(left))


// }

// function join(left,right){
//     let i =0;
//     let j=0;
//     let newArr = []
//     while(i<left.length && j <right.length){
//         if(array[i] < array[j]) newArr.push(left[i++])
//         else{
//             newArr.push(right[j++])
//         }
//     }

//     while(i<left.length){
//         newArr.push(left[i++])
//     }
//     while(j<right.length){
//         newArr.push(right[j++])
//     }

//     return newArr
// }


// for(let i=0;i<array.length;i++){
//      for(let j=0;j<array.length-1;j++){
//         if(array[j] > array[j+1] ){
//             swap(array,j,j+1)
//         }
//      }
// }

// for(let i=0;i<array.length;i++){
//     let smallest = i;
//     for(let j=i;j<array.length;j++){
//         if(array[j] < array[smallest]) smallest = j
//     }
//     swap(array,smallest,i)
// }

// for(let i=1;i<array.length;i++){
//     let current = array[i]
//     let j = i-1
//     while(j>0 && array[j] < current){
//         array[j+1] = array[j]
//         j--;
//     }
//     array[j+1] = current
// }






// for(let i=0;i<array.length;i++){
//     let smallest = i
//     for(let j=i;j<array.length;j++){
//         if(array[j] < array[smallest]){
//             smallest = j
//         }
//     }
//     swap(array,i,smallest)
// }



// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array.length-i;j++){
//         if(array[j] > array[j+1]){
//             swap(array,j,j+1)
//         }
//     }
// }



// class Node{
//     constructor(value){
//         this.data = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(size){
//         this.top  = null
//         this.size = size
//     }

//     push(value){
//         const newNode = new Node(value)
//         if(!this.top)  top = newNode
//         newNode.next = this.top
//         this.top = newNode
//     }

//     pop(){
//         this.top = this.top.next
//     }
// }



// console.log(Math.ceil(Math.random()*10000))



// const array = [1,2,3,4,5,6,7,8,9,10]

// function reverseIt(array,pattern){
//      let assumedBalanceElement = (array.length)%pattern
//     for(let i=0;i<array.length;i++){
//         if(array[i] % pattern === 0){
//             let k = (i+1)-pattern;
//             let limit = Math.ceil((k+i)/2);
//             for(let j=i;j>=limit;j--){
//                  let temp = array[j] 
//                  array[j] = array[k]
//                  array[k] = temp
//                  k++;
//             }
//         }
//     }

//     return array
// }


// console.log(reverseIt(array,4))


// let input = {
//     blue_shirt : "2021/10/2,2022/15",
//     black_shirt : "2020/5/2",
//     red_saree : "2022/13/5,2019/5/5,2018/1/0"
// }

// function factory(inputobj){
//     let outputobj = {}
//     let outputobjkeys = ["item", "color","year","quantity" ,"damaged"]
//     let outputarray = []
//     for(let key in inputobj){
//         let i=0;
//         let concat = ""
//         key.split('_').reverse().forEach(element=>{
//            outputobj[outputobjkeys[i++]] = element

//         }) 
//         let j = i;
//         let count = 0;
//        for(let k=0;k<inputobj[key].length;k++){
//         if(inputobj[key][k] != ","){
//           if(inputobj[key][k] != "/"){
//             concat += inputobj[key][k]
//           }else{
//             count++;
//             if(outputobjkeys[i] == "year" || outputobjkeys[i]  == "quantity" || outputobjkeys[i]  == "damaged"){
//                 outputobj[outputobjkeys[i++]] = parseInt(concat)
//                 concat=""    
//             }else{
//                 outputobj[outputobjkeys[i++]] = concat
//                 concat=""   
//             }
//           }
//         }else{ 
          
//             if(concat){
//                 if(outputobjkeys[i] == "year" || outputobjkeys[i]  == "quantity" || outputobjkeys[i]  == "damaged"){
//                     outputobj[outputobjkeys[i++]] = parseInt(concat)
//                     concat=""    
//                 }else{
//                     outputobj[outputobjkeys[i++]] = concat
//                     concat=""   
//                 }
//             }  
//             outputarray.push({...outputobj}) 
//             i=j;
//             if(count == 1) outputobj.damaged = 0;
//             count = 0;
//         }    
//        }
//        if(concat){
//         outputobj[outputobjkeys[i++]] = parseInt(concat)
//         concat=""    
//         } 
//         if(count == 1) {
//             outputobj.damaged = 0;
//         }
//        outputarray.push({...outputobj}) 
           
        
          
//     }
//     return outputarray
// }
// console.log(factory(input))


// var input = {
//     blue_shirt: "2021/10/2,2022/15",
//     black_shirt: "2020/5/2",
//     red_saree: "2022/13/5,2019/5/5,2018/1/0",
//   };
  
//   const jsonToArray = (input) => {
//     const result = [];
//     for (const key in input) {
//       const item = key.split("_");
//       const itemColor = item[0];
//       const itemType = item[1];
//       const itemValues = input[key].split(",");
//       itemValues.forEach((itemDetails) => {
//         const details = itemDetails.split("/");
//         const year = parseInt(details[0]);
//         const quantity = parseInt(details[1]);
//         const damaged = details[2] != undefined ? parseInt(details[2]) : 0;
//         result.push({
//           item: itemType,
//           color: itemColor,
//           year,
//           quantity,
//           damaged,
//         });
//       });
//     }
//     return result;
//   };
//   let array =jsonToArray(input)
//   console.log(array)


class Node{
  constructor(value){
    this.data = value
    this.left = null
    this.right = null
  }
}

class BinaryTree{
   constructor(){
    th
   }
}



