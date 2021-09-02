/**
 * Adjacency List Graph
 * 
 * This graph representation 
 */
class GraphV1 {
    constructor() {
        this.edges = {};
        this.vertices = [];
    }

    addEdge = (vertex1, vertex2, weight) => {
        this.edges[vertex1].push({ vertex: vertex2, weight: weight });
        this.edges[vertex2].push({ vertex: vertex1, weight: weight });
    }

    addVertex = (vertex) => {
        this.edges[vertex] = [];
        this.vertices.push(vertex)
    }

    showGraph = () => {
        let graph = '';
        for (let vertex of this.vertices) {
            graph += `${vertex}: ${this.edges[vertex].map(n => n.vertex).join(", ")} \n`;
        }
        return graph;
    }
   
}


module.exports = {
    GraphV1
};