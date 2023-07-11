const {swap} = require("../Sorting/swap")

class Heap{
    constructor(array,type){
        this.array = array
        this.type = type
        this.buildHeap()
    }

    buildHeap(){
      for(let i = this.parentofTheNode(this.array.length -1);i>=0;i--){
        this.shiftDown(i)
      }
    }

    shiftDown(index){
        let leftChild = this.leftChild(index)
        let endIndex = this.array.length - 1;
        while(leftChild <= endIndex){
            let rightChild = this.rightChild(index)
            let idxToShift;
            if(rightChild <= endIndex && this.type == "max" ? this.array[rightChild]  > this.array[leftChild] : this.array[rightChild] < this.array[leftChild]){
                 idxToShift = rightChild
            }else{
                idxToShift = leftChild
            }

            if(this.type == "max" ? this.array[index] < this.array[idxToShift] : this.array[index] > this.array[idxToShift]){
                swap(this.array,index,idxToShift)
                index = idxToShift
                leftChild = this.leftChild(index)
            }else{
                return
            }
        }
    }

    insertAValue(value){
        this.array.push(value)
        this.shiftUp(this.array.length -1)
    }

    shiftUp(index){
        let parent = this.parentofTheNode(index)
        while(index > 0 && this.type == "max" ?this.array[index] > this.array[parent] : this.array[index] < this.array[parent]){
            swap(this.array,parent,index)
            index = parent
            parent = this.parentofTheNode(index)
        }
        }


    remove(){
        swap(this.array,0,this.array.length-1)
        this.array.pop()
        this.shiftDown(0)
    }

    peek(){
        return this.array[0]
    }

    traverse(){
        this.array.forEach(element => console.log(element))
    }

    parentofTheNode(index){
        return Math.floor((index -1)/2)
    }

    leftChild(index){
        return Math.floor((2*index)+1)
    }

    rightChild(index){
        return Math.floor((2*index)+2)
    }
}

module.exports = {Heap}