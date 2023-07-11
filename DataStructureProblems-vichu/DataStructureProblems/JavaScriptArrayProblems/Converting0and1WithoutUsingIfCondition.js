const array =  [1,0,1,0,0,0,1] ;


// 1 is true   and   0 is false 
array.forEach((element,index)=>{
    array[index] = !element * 1;
})

console.log(array)