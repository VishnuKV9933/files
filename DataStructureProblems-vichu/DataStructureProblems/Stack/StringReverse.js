const { Stack } = require("./StackInLinkOfTheLink")

const str = "vishnu"
const stack = new Stack()

for(let i=0;i<str.length;i++){
    stack.push(str.charAt(i))
}

stack.traverse()