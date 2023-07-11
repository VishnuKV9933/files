const array = [1,2,5,4,1,1,1,8,8,9,6,4,8,7,6,3,2,5,4,1,2,8,3,3,3,3,3,3,3,3,3,3]
let count;
let obj  = {};
for(let j=0;j<array.length;j++){
    count = 1;
    for(let i=j+1;i<array.length;i++){
          if(array[i] == array[j]){
            count++
            let temp = array[i];
            array[i] = array[j+1]
            array[j+1] = temp
            j++
          }    
    }
     obj[ array[j] ] = count;
}
console.log(obj)
