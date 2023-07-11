class hashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size
    }

    hash(key){
        let total=0;
        for(let i = 0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index=this.hash(key);
        let bucket=this.table[index];
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let sameKey=bucket.find(item=>{
                item[0]==key
            })
            if(sameKey){
                item[1]=value
            }else{
                bucket.push([key,value])
            }
        }
        //  this.table[index]=value
        
       
    }
    get(key){
        const index=this.hash(key);
        console.log(index);
        let bucket=this.table[index];
        if(bucket){
          const sameKey=bucket.find(item=>item[0]==key);
          console.log('sameKey',sameKey);
          if(sameKey){
            return sameKey[1]
          }
        }
        // return this.table[index]
    

    }

    delete(key){
        let index=this.hash(key);
        let bucket=this.table[index];
        if(bucket){
            let sameKey=bucket.find(item=>item[0]==key);
            if(sameKey){
               sameKey[1]='undefined'
            }
        }
       
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                 console.log(i,this.table[i]);
            }
        }
    }
}

const table=new hashTable(50);
 table.set('name','safna')
 table.set('name','vsinu')

 table.display()