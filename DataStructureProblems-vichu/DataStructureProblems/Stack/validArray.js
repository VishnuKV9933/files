const { Stack } = require("./StackInLinkOfTheLink");

const stack = new Stack()

let array = [0,1,1,0,0,0,0,0,1,0,1,1,1,1]


if(array.length % 2 != 0) console.log("it is not balanced")
else{
    for(let i=0;i<array.length;i++){
        if(stack.isEmpty()) stack.push(array[i])
        else if(stack.peek() != array[i]) stack.pop()
        else if(stack.peek() == array[i]) stack.push(array[i])
       
    }
    if(stack.isEmpty()) console.log("it is balanced")
    else console.log("it is not balaced !!")
}

stack.push(6)
stack.push(2)
stack.push(7)
stack.push(1)
stack.push(9)
stack.push(4)
stack.push(5)
stack.traverse()
stack.sortTheStack()
console.log("--------------------------------")
stack.traverse()

