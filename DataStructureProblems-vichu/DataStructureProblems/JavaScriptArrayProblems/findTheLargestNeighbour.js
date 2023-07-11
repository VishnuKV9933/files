let a = [3,50,10,200,1500 ,1];
let largestNeighbour;
for(i=0;i<a.length;i++){
   if(i==0){
    largestNeighbour = a[i];
   }else{
    if(a[i]>a[i-1] && a[i] > a[i+1] && a[i] > largestNeighbour){
     largestNeighbour = a[i];
    }
   }
   if(i==a.length-1 && a[i] > largestNeighbour){
    largestNeighbour = a[i]
   }
}

console.log(largestNeighbour);