class HashTable{
    constructor(size){
      this.table =  new Array(size) 
      this.size = size
    }

    hashfunction(key){
        let sumOfTheLetter = 0;
        for(let i=0;i<key.length;i++){
            sumOfTheLetter += key.charCodeAt(i)
        }
        return sumOfTheLetter % this.size
    } 

    set(key,value){
        let index = this.hashfunction(key)
        const bucket = this.table[index] 
        if(!bucket) this.table[index] = [[key,value]]
        else{
            let sameKey = bucket.find(item => item == key)
            if(!sameKey) bucket.push([key,value])
            else sameKey[1] = value
        }
    }

    get(key){
        let index = this.hashfunction(key)
        const bucket = this.table[index]
        if(!bucket) return undefined
        else{
            let findkey = bucket.find(item => item[0] == key)
            if(findkey) return findkey[1]
            else return undefined
        }
    }

    traverse(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i])  console.log([i]," ",this.table[i])
           
        }
    }

    remove(key){
        let index = this.hashfunction(key)
        let bucket = this.table[index]
        if(!bucket) return;
        else{
            let findkey = bucket.findIndex(item => item[0] == key)
            if(!-1) return  
            else delete bucket[findkey]
        }
    }
    removeAll(){
        this.table.fill(undefined)
    }

   
}

let hash = new HashTable(6)
hash.set("name","shinas")
hash.set("mane","dulqu")
hash.set("mean","dulqu")
hash.set("neam", "hid")
hash.set("age",12)
hash.set("mean","dul")

console.log(hash.get("mean"))
// hash.traverse()
