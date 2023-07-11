const array = [1,2,3,4,5,6,7,8,9,10]

function reverseIt(array,pattern){
     let assumedBalanceElement = (array.length)%pattern
    for(let i=0;i<array.length;i++){
        if(array[i] % pattern === 0){
            let k = (i+1)-pattern;
            let limit = Math.ceil((k+i)/2);
            for(let j=i;j>=limit;j--){
                 let temp = array[j] 
                 array[j] = array[k]
                 array[k] = temp
                 k++;
            }
        }
    }

    return array
}