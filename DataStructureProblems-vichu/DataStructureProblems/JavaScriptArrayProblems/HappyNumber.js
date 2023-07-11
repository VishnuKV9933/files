let number = 14;
HappyNumber(number);

function HappyNumber(number){
    if(number.toString().length > 1){
    let squareSum = 0;
        for(i=0;i<number.toString().length;i++){
           squareSum += Math.pow((parseInt(number.toString()[i])),2);
        }
        HappyNumber(squareSum);
    }else{
        if(number == 1){
            console.log("its a happy number")
        }else{
            console.log("its not a happy number")
        }
    }
}

