const array = [5,2,3,1,8,5,12,0,6];
console.log(insertionSort(array))
function insertionSort(array){
    for(let i=1;i<array.length;i++){
        let current = array[i]
        let j = i-1
        while(j>=0 && array[j] > current){
            array[j+1] = array[j]
            j--;
        }
        array[j+1] = current;
    }
    return array
}