let a=[123,4563,[[[[[[[[[[[[[[[[[[[[[[2,3,[[[[[[[[[[[5,[[[[[[[2,[[[[[[[[[[[[[[1,2,3,4,[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[12,[[[[[[[[[[[[[[[[[45,99]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],10,30,34];
let b= []
console.log(a.length)
flat(a);
console.log(b)




function flat(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flat(arr[i]);
        }else{
           b.push(arr[i]);
        }
    }
}

