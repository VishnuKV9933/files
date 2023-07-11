let input = {
    blue_shirt : "2021/10/2,2022/15",
    black_shirt : "2020/5/2",
    red_saree : "2022/13/5,2019/5/5,2018/1/0"
}

function factory(inputobj){
    let outputobj = {}
    let outputobjkeys = ["item", "color","year","quantity" ,"damaged"]
    let outputarray = []
    for(let key in inputobj){
        let i=0;
        let concat = ""
        key.split('_').reverse().forEach(element=>{
           outputobj[outputobjkeys[i++]] = element

        }) 
        let j = i;
        let count = 0;
       for(let k=0;k<inputobj[key].length;k++){
        if(inputobj[key][k] != ","){
          if(inputobj[key][k] != "/"){
            concat += inputobj[key][k]
          }else{
            count++;
            if(outputobjkeys[i] == "year" || outputobjkeys[i]  == "quantity" || outputobjkeys[i]  == "damaged"){
                outputobj[outputobjkeys[i++]] = parseInt(concat)
                concat=""    
            }else{
                outputobj[outputobjkeys[i++]] = concat
                concat=""   
            }
          }
        }else{ 
          
            if(concat){
                if(outputobjkeys[i] == "year" || outputobjkeys[i]  == "quantity" || outputobjkeys[i]  == "damaged"){
                    outputobj[outputobjkeys[i++]] = parseInt(concat)
                    concat=""    
                }else{
                    outputobj[outputobjkeys[i++]] = concat
                    concat=""   
                }
            }  
            outputarray.push({...outputobj}) 
            i=j;
            if(count == 1) outputobj.damaged = 0;
            count = 0;
        }    
       }
       if(concat){
        outputobj[outputobjkeys[i++]] = parseInt(concat)
        concat=""    
        } 
        if(count == 1) {
            outputobj.damaged = 0;
        }
       outputarray.push({...outputobj}) 
           
        
          
    }
    return outputarray
}
console.log(factory(input))



///////////////////////////////////////////////////////////////////


var input2 = {
    blue_shirt: "2021/10/2,2022/15",
    black_shirt: "2020/5/2",
    red_saree: "2022/13/5,2019/5/5,2018/1/0",
  };
  
  const jsonToArray = (input) => {
    const result = [];
    for (const key in input) {
      const item = key.split("_");
      const itemColor = item[0];
      const itemType = item[1];
      const itemValues = input[key].split(",");
      itemValues.forEach((itemDetails) => {
        const details = itemDetails.split("/");
        const year = parseInt(details[0]);
        const quantity = parseInt(details[1]);
        const damaged = details[2] != undefined ? parseInt(details[2]) : 0;
        result.push({
          item: itemType,
          color: itemColor,
          year,
          quantity,
          damaged,
        });
      });
    }
    return result;
  };
  let array =jsonToArray(input2)
  console.log(array)