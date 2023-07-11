function LongestSubstring (string){
    let longest =''
    let trial=''
    let longSet=new Set()
    for(let i=0;i<string.length;i++){
        if(longSet.has(string[i])){
            longSet.clear()
            if(trial.length>longest.length) longest=trial;
            trial=''
        }else{
            longSet.add(string[i])
            trial +=string[i]
        }
    }
    if(trial.length>longest.length) longest=trial;
    return longest
}

console.log(LongestSubstring("vishyulpvnuqwer"));