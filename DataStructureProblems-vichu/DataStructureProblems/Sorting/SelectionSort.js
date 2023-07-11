const { swap } = require("./swap");

const array = [2,5,1,2,4,5,6,234,5,2,44,5654,9,0,123,5,23354,122,3,3,5,1,3,56,7,78,2345,2]
console.log(selectionSort(array))

function selectionSort(array){
    for(let i =0;i<array.length;i++){
        let smallest = array[i];
        let smallestIdx = i;
        for(let j=i+1;j<array.length;j++){
           if(smallest > array[j]){
             smallest = array[j]
             smallestIdx = j;
           }
        }
        swap(array,i,smallestIdx)
    }

    return array
}