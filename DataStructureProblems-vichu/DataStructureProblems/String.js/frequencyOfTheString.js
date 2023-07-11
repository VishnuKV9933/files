const borrow = require("./stringSort")
let array = []
let str = borrow.stringSort("aaabbbcccddd")

//console.log(borrow.stringSort("shinas"))
for(i=0;i<str.length;i++){
    array.push(str.charAt(i))
}

console.log(array)