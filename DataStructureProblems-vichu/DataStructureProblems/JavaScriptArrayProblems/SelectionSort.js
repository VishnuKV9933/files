let arr = [4,1,6,2,23,0]

for(i=0;i<arr.length-1;i++){
    let smallest = arr[i];
    for(j=i+1;j<arr.length;j++){
        if(smallest > arr[j]){
            smallest = arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
        }
    }
}

console.log(arr)