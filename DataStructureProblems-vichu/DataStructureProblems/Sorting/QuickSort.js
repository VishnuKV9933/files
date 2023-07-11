const { swap } = require("./swap");

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

function partition(array,left,right){
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






