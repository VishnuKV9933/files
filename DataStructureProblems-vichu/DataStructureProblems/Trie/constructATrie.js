class Trie{
  constructor(string){
      this.root = new Map()
      for(let i=0;i<string.length;i++){
          let current = this.root
          for(let j=i;j<string.length;j++){
              if(!current.has(string.charAt(j))){
                    current.set(string.charAt(j),new Map())
              }
              current = current.get(string.charAt(j))
          }
          current.set("eow",true)
      }
  }

  search(string){
      let current = this.root
      for(let i=0;i<string.length;i++){
          if(!current.has(string.charAt(i))) return false
          current = current.get(string.charAt(i))
      }
      return current.has("eow")
  }


}