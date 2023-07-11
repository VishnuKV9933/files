let arr = [9,9,9,9];

incrementingTheArray(arr[(arr.length -1)],0)

function incrementingTheArray(a,count){
        arr[(arr.length -1-count)] = a+1;
    
         if((a+1).toString().length > 1){
            if(arr.length -1-count !=0)   {
             arr[(arr.length -1-count)]  =   parseInt(((a+1).toString().slice(1)))
             incrementingTheArray(arr[(arr.length -1-(++count))],count)
            }
         }
     }    
console.log(arr)