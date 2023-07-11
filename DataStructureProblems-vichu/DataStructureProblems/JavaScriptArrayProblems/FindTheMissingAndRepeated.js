arr = [1,2,4,4,5]
for(i=0;i<arr.length;i++){
    let count = 1;
   
   for(j=i;j<arr.length;j++){
    if(arr[i] == arr[j] && i != j){
        count++;
        temp = arr[j]
        arr[j] =  arr[i+1] 
        arr[i+1] = temp
        i++
    }
   }
   console.log(arr[i] + ` occurs  ${count} times in the array`);
}

