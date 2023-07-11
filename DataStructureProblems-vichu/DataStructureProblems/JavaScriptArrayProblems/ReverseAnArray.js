let a = [1,2,5,23,6,345,222,4,1];
for(i=0;i<a.length;i++){
    if(i<(a.length/2)){

        temp = a[i]
        a[i] = a[a.length-(i+1)]
        a[a.length-(i+1)] = temp;
    }
}
console.log(a);


