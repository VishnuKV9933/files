let userName = "dulquShinas";
let array = []
let newString = "";
for(i=0;i<userName.length;i++){  
    array.push(userName.charAt(i))
}
for(i=0;i<array.length/2;i++){
    let temp = array[i] 
    array[i]  = array[array.length-1-i]
    array[array.length-1-i] = temp
}
for(i=0;i<array.length;i++){
    newString += array[i];
}
console.log(newString)