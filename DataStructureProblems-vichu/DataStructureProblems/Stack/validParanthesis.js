const { Stack } = require("./StackInLinkOfTheLink")

const para = "{}[]()["
const stack = new Stack()



for(let i=0;i<para.length;i++){
   if(para.length % 2 != 0) return console.log("it is not a valid paranthesis")
   if(para.charAt(i) == "{" || para.charAt(i) == "(" || para.charAt(i) == "[")stack.push(para.charAt(i))
   else if(stack.peek() == "{" && para.charAt(i) == "}") stack.pop()
   else if(stack.peek() == "(" && para.charAt(i) == ")") stack.pop()
   else if(stack.peek() == "[" && para.charAt(i) == "]") stack.pop()
}

if(stack.isEmpty()) console.log("it is a valid paranthesis")
else console.log("it is not a valid paranthesis")

