// function binarySearch(arr, target) {
//     console.log(target);
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// fff=linearSearch([1,2,3,4,5,68,89,90],2)
// // console.log(fff);


// function reverseString(str) {
//     return str.split('').reverse().join('');
// }


// function countVowels(str) {
//     let count = 0;
//     let vowels = 'aeiouAEIOU';
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) !== -1) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("javascript"));
// console.log(reverseString("hello")); 



class Node {
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null
    }
}

class linkedList{

    constructor(){
        this.head=null;
        this.tail=null;
    }


    display(){

        if(this.head==null){
            log
        }

    }
    
    arrayconverter(arr){


        for(let i=0;i<arr.length;i++){

            let newNode =Node(arr[i])
            if(this.head==null){
                this.head=newNode
            }else{
                this.tail.next=newNode;
                this.tail=newNode;
            }

        }

    }

}

let list =new LinkedList()
list.arrayConverter([1,2,3,4,])
