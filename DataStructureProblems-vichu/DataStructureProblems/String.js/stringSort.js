// let str = "geeksforgeeks"
// console.log(stringSort(str))


function stringSort(str){

let array = [];
let reverse =""
for(i=0;i<str.length;i++){
    array.push(str.charAt(i))
}

for(i=0;i<array.length;i++){
    for(j=0;j<array.length-i;j++){
        if(array[j] > array[j+1]){
            temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp;
        }
    }
}

for(i=0;i<array.length;i++){
    reverse += array[i]
}
return reverse
}

module.exports = {stringSort}