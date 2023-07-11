class Graph{
    constructor(){
        this.map=new Map()
    }
    insert(vertex,edge,isBidir){
    if(!this.map.has(vertex)) this.map.set(vertex,[])
    if(!this.map.has(edge)) this.map.set(edge,[])
    if(!this.map.get(vertex).includes(edge))  this.map.get(vertex).push(edge)
    if(isBidir) if(!this.map.get(edge).includes(vertex))  this.map.get(edge).push(vertex)   
    }


    dfs(start){
        let visited = new Set()
        this.dfsHelper(start,visited)
    }
    dfsHelper(vertex,visited){
        console.log(vertex);
        visited.add(vertex)
        for(let neighbor of this.map.get(vertex)){
            if(!visited.has(neighbor)) this.dfsHelper(neighbor,visited)
        }
    
    }

    hasPath(src,dst){
        const queue=[src];
        const visited=new Set()
        visited.add(src)
       while(queue.length>0){
        const current=queue.shift()
        visited.add(current)
        if(current===dst) return true
        for(let neighbor of this.map.get(current)){
            if(!visited.has(neighbor)) queue.push(neighbor)
        }
       }
       return false
    }
    componentsCount(){
        const visited =new Set()
        let count = 0

        this.map.forEach((value,key) => {
           if(this.explore(key,visited)==true) count++
        });

        return count
    }
    explore(node,visited){
        if(visited.has(node)) return false
        visited.add(node)
        for(let neighbor of this.map.get(node)){
            this.explore(neighbor,visited)
        }
        return true
    }

    largestComponent(){
        const visited = new Set()
        let largest = 0;
        this.map.forEach((valur,key) => {
          const size=  this.exploreSixe(key,visited)

          if(size>largest){ 

            largest=size
         

          }
        }); 
        return largest
    }

    exploreSixe(node,visited){
        if(visited.has(node)) return 0
        visited.add(node)
        let size=1
        for(let neighbor of this.map.get(node)){
            size +=this.exploreSixe(neighbor,visited)
        }
        return size
    }

    display(){
        console.log(this.map);
    }
}
let g = new Graph()
g.insert("a","c")
g.insert("a","b")
g.insert("b","a")
g.insert("c","a")
g.insert("d","f")
g.insert("g","h")
// g.display()
// g.dfs("a")
// console.log(g.hasPath("a","f"));
console.log(g.largestComponent());