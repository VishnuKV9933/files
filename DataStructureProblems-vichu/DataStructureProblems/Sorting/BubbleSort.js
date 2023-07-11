const { swap } = require("./swap");
const array =[1,4,5,2,3,44,3,12,234,56,2,345,78,9,0,1,2,31234,2,3]
console.log(bubbleSort(array))


function bubbleSort(array){
    for(let i =0;i<array.length;i++){
        for(let j=0;j<array.length-i;j++){
            if(array[j] > array[j+1]){
                swap(array,j,(j+1))
            }
        }
    }
    return array
}