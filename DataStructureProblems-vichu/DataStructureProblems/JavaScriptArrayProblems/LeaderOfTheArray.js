let arr=[16, 17, 4, 3, 5,10, 2]
for(i=0;i<arr.length;i++){
    flag =0;
    for(j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
            flag =1;    
        }else{
            flag =0
            break;
        }
    }
    if(flag == 1 || i == arr.length - 1){
        console.log(arr[i]);
    }
}





