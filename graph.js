 

class Graph {
    constructor() {
      this.map = new Map();
    }
  
    insert(vertex, edge, isBidir) {
      if (!this.map.has(vertex)) this.map.set(vertex, []);
      if (!this.map.has(edge)) this.map.set(edge, []);
      this.map.get(vertex).push(edge);
      if (isBidir) this.map.get(edge).push(vertex);
    }
  
    display() {
      console.log(this.map);
    }
  
    // Depth-first search algorithm
    dfs(start) {
      const visited = new Set();
      this._dfsHelper(start, visited);
    }
  
    _dfsHelper(vertex, visited) {
      visited.add(vertex);
      console.log(vertex);
      for (const neighbor of this.map.get(vertex)) {
        if (!visited.has(neighbor)) {
          this._dfsHelper(neighbor, visited);
        }
      } 
    }
  
    // Breadth-first search algorithm
    bfs(start) {
      const queue = [start];
      const visited = new Set();
      visited.add(start);
      while (queue.length > 0) {
        const vertex = queue.shift();
        console.log(vertex);
        for (const neighbor of this.map.get(vertex)) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }


    removeEdge(vertex1,vertex2){
        let result=this.map.get(vertex1) 
        const index=result.indexOf(vertex2);
        if(index!=-1){
            result.splice(index,1)
        }
       
      }


      removeVertice(vertex){
        this.map.delete(vertex)
         this.map.forEach((value,key)=>{
            if(value.includes(vertex)){
                this.removeEdge(key,vertex)
            }
          
         })
       
      }
  }
  
  // Example usage
  const g = new Graph();
  g.insert(2,4,true)
  g.insert(2,4,true)
  g.insert(2,4,true)
  g.insert(3,4,true)
  g.insert(5,4,true)
  g.display();
  
  // console.log("Depth-first search:");
  g.dfs(4);
  
  // console.log("Breadth-first search:");
  // graph.bfs(3);
  

// //   graph.removeVertice(7)
// //  graph.removeEdge(5,7)
//   graph.display();
//   graph.dfs(3)
