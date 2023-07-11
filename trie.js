
class Trie{
  constructor(){
      this.root = new Map();
  }

  insert(string){
      let current=this.root;
      for(let i=0;i<string.length;i++){
          let char = string[i]
          if(!current.has(char)){
              current.set(char,new Map())
          }
          current=current.get(char);
      }
      current.set("eow",true)
  }

  displayAllWords(){
      let words = [];

      function traverse(node, prefix){
          node.forEach((value, key) => {
              if(key === "eow"){
                  words.push(prefix);
              } else {
                  traverse(value, prefix + key);
              }
          });
      }
      traverse(this.root,"");
      console.log(words);
  }

remove(word){
    let current = this.root;
    let stack = [];
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(!current.has(char)){
            return false; 
        }
        stack.push({node: current, char: char});
        current = current.get(char);
    }
    if(!current.has("eow")){
        return false; 
    }
    current.delete("eow"); 
    if(current.size > 0){
        return true; 
    }

    for(let i = stack.length - 1; i >= 0; i--){
        let node = stack[i].node;
        let char = stack[i].char;
        node.delete(char);
        if(node.size > 0 || i == 0){
            break; // Stop when the node has other children or the root node is reached
        }
    }
    return true; // Word successfully removed
}


startWith(prefix) {
    let current = this.root;
    let prefixes = [];
    for(let i = 0; i < prefix.length; i++) {
        let char = prefix[i];
        if(!current.has(char)) {
            return prefixes; // Prefix not found in trie
        }
        current = current.get(char);
    }
    this._findPrefixesHelper(current, prefix, prefixes);
    return prefixes;
}

_findPrefixesHelper(node, prefix, prefixes) {
    let boolean="boolean"
    if(typeof(node)!==boolean){
    if(node.has("eow")) {
        prefixes.push(prefix);
    }
}
    if(typeof(node)!==boolean){
            for(let [char, child] of node) {
                this._findPrefixesHelper(child, prefix + char, prefixes);
            }
        }
}
findSuffixes(prefix) {
    let current = this.root;
    let suffixes = [];
    for(let i = 0; i < prefix.length; i++) {
        let char = prefix[i];
        if(!current.has(char)) {
            return suffixes; // Prefix not found in trie
        }
        current = current.get(char);
    }
    this._findSuffixesHelper(current, prefix, suffixes);
    return suffixes;
}

_findSuffixesHelper(node, suffix, suffixes) {
    for(let [char, child] of node) {
        if(typeof(node)!=="boolean"){
        if(child.has("eow")) {
            suffixes.push(suffix + char);
        }
        this._findSuffixesHelper(child, suffix + char, suffixes);
    }
    }
}
  search(word){
    let current = this.root;
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(!current.has(char)){
            return false; // Word is not in trie
        }
        current = current.get(char);
    }
    return current.has("eow"); // Word found in trie
}

log(){
    console.log(this.root);
}


}

let tr = new Trie()
tr.insert("vishnu")
tr.insert("vismaya")
tr.insert("ai")
tr.insert("vis")


console.log(tr.findSuffixes("vis"))



class Trie{

    constructor(string){
        this.root=new Map();
        for(let i=0;i<string.length;i++){
            var current=this.root;
            for(let j=i;j<string.length;j++){
                if(!current.has(string.charAt(j))){
                    current.set(string.charAt(j),new Map())
                }
                current=current.get(string.charAt(j))
            }
            current.set('*',null)
        }    

    }

    search(string){
        let current=this.root;
        for(let i=0;i<string.length;i++){    
            if(current.has(string.charAt(i))){
                current=current.get(string.charAt(i))
            }else{
                return false
            }
        }
        return  current.has('*') 
    }
}
 
const newTrie=new Trie('safna');
console.log(newTrie.search("afnaa"));