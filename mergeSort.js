function mergeSort(array){
    if(array.length<=1){
        return array ;
    }
   let mid=array.length/2;
   let firstArray=array.slice(0,mid)
   let secondArray=array.slice(mid,array.length)
   return join(mergeSort(firstArray),mergeSort(secondArray))
}

function join(firstArray,secondArray){
    let newArray=[];
    let i=0;
    let j=0;
    let k=0;
    
    while(i<firstArray.length && j <secondArray.length){

        if(firstArray[i]<=secondArray[j]){
            newArray[k++]=firstArray[i++]
        }else{
            newArray[k++]=secondArray[j++]
        }

    }

    while(i<firstArray.length){ 
        newArray[k++]=firstArray[i++]
    }

    while(j<secondArray.length){
        newArray[k++]=secondArray[j++]
    }
    return newArray;
}



