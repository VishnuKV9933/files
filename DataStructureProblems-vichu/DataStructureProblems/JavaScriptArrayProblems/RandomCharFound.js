
let a = "shina";
let alphabet = [];
let newString;

for (var i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i))
}
let randomAlphabet = alphabet.sort(()=> Math.random() - 0.5)
console.log("given String")
 console.log(a)
 console.log("============================")

for(var i=0;i<randomAlphabet.length;i++){
    if(!a.includes(randomAlphabet[i])){
        console.log("random Alphabet Added which is not present in the string")
        console.log(randomAlphabet[i])
        console.log("============================")
        newString= a.concat(randomAlphabet[i])
          break;
      }
}
console.log("string after adding the random alphabet");
console.log(newString)
console.log("============================")


let randomString = newString.split("").sort(()=>Math.random() - 0.5).join("")

console.log("string after shuffeling")
console.log(randomString);
console.log("============================")


for(var i= 0 ;i<randomString.split("").length;i++){
    if(!a.includes(randomString[i])){
        console.log("found the alphabet that is added")
        console.log(randomString[i]);
        console.log("============================")
        break;
    }
}
