
function swap(array,i,j){
    let temp=null
    temp=array[i];
    array[i]=array[j];
    array[j]=temp;
    
    }
    
    const array=[23,45,12,5,8,22]
    
    function bubbleSort(array){
        
        for(let i=array.length;i>0;i--){
    
            for(let j=0;j<=i;j++){
                if(array[j]>array[j+1]){
                    swap(array,j,j+1)
                }
            }
        
        }
    
        return array
    
    }
    
function insertionSort(array){

    for(let i=1;i<array.length;i++){

        let key=array[i]
        let j=i-1

        while(j>=0 &&array[j]>key){
            array[j+1]=array[j]
            j--;
        }
        
        array[j+1]=key

    }
    return array

}



// function selectionSort(array){
    
//     for(let i=0;i<array.length-1;i++){

     

//         for(let j=i+1;j<array.length;j++){
//             if(array[i]>array[j]){
              
              
//                 swap(array,i,j)
//             }

       

//         }

//         return array

//     }

// }

function selectionSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      
      // Find the index of the minimum element in the remaining unsorted portion
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      
      // Swap the minimum element with the first element in the unsorted portion
      swap(array,minIndex,i)
   
    }
    
    return arr;
  }
  
  // Example usage:
  


loger()

  


let a
console.log(a);
a=10



console.log(b);
b=29
var b

function loger(){
    console.log("hai");
}