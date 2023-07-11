let string = "hello";
let stringArray = [];
let stringArray2 = [];
let left ="";
let right = "";
for(i=0;i<string.length;i++){
    stringArray.push(string.charAt(i))
    stringArray2.push(string.charAt(i))
}


for(let i=0;i<2;i++){
    let clockWise = stringArray[stringArray.length-1];
    for(j=stringArray.length-1;j>=0;j--){
         stringArray[j] = stringArray[j-1]
    }
    stringArray[0] = clockWise;


    let antiClockWise = stringArray2[0]
    for(k=0;k<stringArray2.length-1;k++){
        stringArray2[k] = stringArray2[k+1]
    }
    stringArray2[stringArray2.length-1] = antiClockWise
}


for(let i=0;i<stringArray.length;i++){
    left += stringArray[i]
    right += stringArray2[i]
}

console.log(left)
console.log(right)