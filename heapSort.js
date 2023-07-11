function swap(array,i,j){
  let temp=array[i]
  array[i]=array[j]
  array[j]=temp

}
function heapSort(array) {
  let k=3
    const n = array.length; 
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i);
    }
  
 
    for (let i = n - 1; i >= k; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      heapify(array, i, 0);
    }

    return array[k];
  }  
  
  function heapify(array, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  

    if (left < n && array[left] > array[largest]) {
      largest = left;
    }
  
  
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }

   
    if (largest !== i) {
     swap(array,largest,i)
      heapify(array, n, largest);
    }

  }
 const array = [12, 11, 13, 5, 6, 7];
 console.log( heapSort(array) )
  