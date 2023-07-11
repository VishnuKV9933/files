const array = [8,5,4,5,66,4,2,7,1,5,4,66,22,4,5,85,4]
let newArray = []
for(let i=0;i<array.length;i += 2){
    if(i == array.length-1){
        newArray.push(array[i])
        break;
    }
    newArray.push(array[i] + array[i+1])
}
console.log(newArray)