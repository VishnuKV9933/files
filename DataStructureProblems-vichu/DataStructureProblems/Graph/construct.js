class Graph{
    constructor(){
        this.map = new Map()
    }

    insertAValue(vertex,edge,isBidir){
        if(!this.map.has(vertex)) this.map.set(vertex,[])
        if(!this.map.has(edge)) this.map.set(edge,[])
        this.map.get(vertex).push(edge)
        if(isBidir) this.map.get(edge).push(vertex)
    }

    display(){
        console.log(this.map) 
    }
}

const graph = new Graph()
graph.insertAValue(3,4,false)
graph.insertAValue(3,5,false)
graph.insertAValue(4,5,false)
graph.insertAValue(5,6,true)
graph.insertAValue(5,7,true)

graph.display()