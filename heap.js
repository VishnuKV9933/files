
function swap(arr,rightIdx, leftIdx ){
    let temp=arr[rightIdx];
    arr[rightIdx]=arr[leftIdx];
    arr[leftIdx]=temp;
    return arr;
}

class MinHeap{
    constructor(array){
     this.heap=this.buildHeap(array)
    }
     buildHeap(array){
        this.heap=array
       for(let i=this.parent(this.heap.length-1);i>=0;i--){
        this.shiftDown(i)
       }
       return this.heap;
    }

    parent(i){
      return Math.floor((i-1)/2)
    }

    leftIndx(i){
        return (2*i)+1
    }

    rightIndex(i){
        return (2*i)+2
    }
    
    shiftDown(currentIndx){
        let arr=this.heap;
        let endIdx=arr.length-1;
        let leftIdx=this.leftIndx(currentIndx)

        while(leftIdx<=endIdx){
            let rightIdx=this.rightIndex(currentIndx)
            let shiftIndx;
            if(rightIdx<=endIdx&&arr[rightIdx]<arr[leftIdx]){
            shiftIndx=rightIdx;
            }
            else{
               shiftIndx=leftIdx
            }
            if(arr[shiftIndx] < arr[currentIndx]){
                swap(this.heap,shiftIndx,currentIndx)
                currentIndx=shiftIndx;
                leftIdx=this.leftIndx(currentIndx)
            }else {
                return
            } 

        }
   
    }
    
    shiftUp(currentIdx){
        let arr=this.heap
        let parentIndx=this.parent(currentIdx)
        while(currentIdx>0 && arr[parentIndx]>arr[currentIdx]){
            swap(arr,currentIdx,parentIndx)
            currentIdx=parentIndx;
            parentIndx=this.parent(currentIdx);
        }
    }

    peek(){
        return this.heap[0]
    }


    removeTop(){
       let arr=this.heap;
       swap(arr,arr.length-1,0)
       arr.pop()
       this.shiftDown(0)
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    display(){
        let arr=this.heap
        for(let i=0;i<=arr.length-1;i++){
            console.log(arr[i]);
        }
    }
}




let min=new MinHeap([4,6,1,2,7,9])


min.display()
