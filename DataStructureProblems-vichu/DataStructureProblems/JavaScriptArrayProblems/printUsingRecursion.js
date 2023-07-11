const array = [4,3,2,1,63,45,3,7,44]
let i=0
function printArray (array){
    if(i == array.length) return
    console.log(array[i++])
    printArray(array)
}

printArray(array)