function quickSort(array){
    console.log(array.length-1)
   qucksorthelper(array,0,array.length-1)
}

function qucksorthelper(array,startIndx,endIndex){

    function swap(array,index1,index2){
       let temp=array[index1];
       array[index1]=array[index2];
       array[index2]=temp;
    }

    if(startIndx>=endIndex){
        return;
    }
    let pivotIndx=startIndx;
    let leftIndex=startIndx+1;
    let rightIndex=endIndex
    while(leftIndex<=rightIndex){
        if(array[leftIndex]>=array[pivotIndx]&&array[rightIndex]<=array[pivotIndx]){
            swap(array,leftIndex,rightIndex)
            leftIndex++;
            rightIndex--;
        }
        if(array[leftIndex]<=array[pivotIndx]){
            leftIndex++;
        }
        if(array[rightIndex]>=array[pivotIndx]){
            rightIndex--;
        }
    }
    swap(array,rightIndex,pivotIndx)
    qucksorthelper(array,startIndx,rightIndex-1);
    qucksorthelper(array,rightIndex+1,endIndex)
}

let numbers=[7,5,6,0,1,4,2,9,3]

quickSort(numbers)
console.log(numbers);

 



//---------------------------------------------------------------------------------------------------------------------







// function quickSort(array){
//     console.log(array.length-1)
//     qucksorthelper(array,0,array.length-1)
// }

// function qucksorthelper(array,startIndx,endIndex){

//     function swap(array,index1,index2){
//         let temp=array[index1];
//         array[index1]=array[index2];
//         array[index2]=temp;
//     }

//     if(startIndx>=endIndex){
//         return;
//     }
//     let pivotIndx=startIndx;
//     let leftIndex=startIndx+1;
//     let rightIndex=endIndex;
//     while(leftIndex<=rightIndex){
//         while(array[leftIndex]<=array[pivotIndx]){
//             leftIndex++;
//         }
//         while(array[rightIndex]>array[pivotIndx]){
//             rightIndex--;
//         }
//         if(leftIndex<=rightIndex){
//             swap(array,leftIndex,rightIndex);
//             leftIndex++;
//             rightIndex--;
//         }
//     }
//     swap(array,rightIndex,pivotIndx);
//     qucksorthelper(array,startIndx,rightIndex-1);
//     qucksorthelper(array,rightIndex+1,endIndex);
// }

// let numbers=[7,5,6,0,1,4,2,9,3];

// quickSort(numbers);
// console.log(numbers);






//---------------------------------------------------------------------------------------------------------------------







const array = [8,1,5,3,4,7,6,2];

console.log(quickSort(array))

function quickSort(array,left=0,right=(array.length-1)){
    if(left < right){
        let pivot = median(array,left,right);
         swap(array,pivot,right)
         let pivotHome = partition(array,left,right);
         quickSort(array,left,pivotHome-1)
         quickSort(array,pivotHome+1,right)
    }
    return array;
}

function median(array,left,right){
    let mid = Math.floor((left+right)/2);
    if(array[mid] < array[left]) swap(array,mid,left);
    if(array[left] > array[right]) swap(array,left,right);
    if(array[mid] > array[right]) swap(array,mid,right);
    return mid;
}

function  partition(array,left,right){
    let pivot = array[right];
    let i = left
    for(let j=left;j<right;j++){
        if(array[j] <= pivot){
            swap(array,j,i)
            i++;
        }
    }
    swap(array,i,right);
    return i;
}

function swap(array,i,j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}