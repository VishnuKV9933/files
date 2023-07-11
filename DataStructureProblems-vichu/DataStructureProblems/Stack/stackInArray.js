class stackArray{
    constructor(){
        this.stack = []
    }


     push(data){
        this.stack.unshift(data)
    }
    
    traverse(){
        if(this.stack.length == 0){
            return "stack is empty"
        }
        for(let i=0;i<this.stack.length;i++){
             console.log(this.stack[i])
        }
    }

    reverseTraverse(){
        if(this.stack.length == 0) return "stack is empty"
        for(let i = this.stack.length-1;i>=0;i--){
            console.log(this.stack[i])
        }
    }

    pop(){
        if(this.stack.length == 0) return "stack is empty"
        this.stack.shift()
    }

    count(){
        if(this.stack.length == 0) return "stack is empty"
        let count=0;
        for(let i =0;i<this.stack.length;i++){
            count++;
        }
        return count
    }
}

const sA = new stackArray()
sA.push(12)
sA.push(87)
sA.push(35)
sA.push(71)
sA.push(25)
sA.push(7)
sA.push(3)
console.log(sA.count())
