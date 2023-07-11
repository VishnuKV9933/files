let string = "    hello   world         hai         da         kutta i"
let trim = "";
let newString = "";


 for(i=0;i<string.length;i++){
    
    if(string.charAt(i) != " "  && string.length-1 != i){
         trim += string.charAt(i)
    }else{
        if(string.charAt(i) != " ") trim += string.charAt(i)
        if(trim){
            if(newString){
                newString = newString + " " + trim
            }else{
                newString = trim
            }
        }
        
        trim = "";
    }
     

 }
console.log(newString);

