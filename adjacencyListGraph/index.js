/**
 * Adjacency List Graph
 * @return { Object }
 */
class AdjacencyListGraph {
    constructor() {
        this.edges = {};
        this.vertices = [];
    }

    addEdge = (vertex1, vertex2, weight) => {
        this.edges[vertex1].push({ 
            vertex: vertex2
        });
        this.edges[vertex2].push({ 
            vertex: vertex1
        });
    }

    addVertex = (vertex) => {
        this.edges[vertex] = [];
        this.vertices.push(vertex)
    }

    showAdjacencyList = () => {
        let graph = '';
        for (let vertex of this.vertices) {
            graph += `${vertex}: ${this.edges[vertex].map(edge => edge.vertex).join(", ")} \n`;
        }
        return graph;
    }
   
}

/**
 * Weighted Adjacency List Graph
 * @return { Object }
 */
 class WeightedAdjacencyListGraph {
    constructor() {
        this.edges = {};
        this.vertices = [];
    }

    addEdge = (vertex1, vertex2, weight) => {
        this.edges[vertex1].push({ 
            vertex: vertex2, 
            weight: weight 
        });
        this.edges[vertex2].push({ 
            vertex: vertex1, 
            weight: weight 
        });
    }

    addVertex = (vertex) => {
        this.edges[vertex] = [];
        this.vertices.push(vertex)
    }

    showWeightedAdjacencyList = () => {
        let graph = '';
        for (let vertex of this.vertices) {
            graph += `${vertex}: ${this.edges[vertex].map(edge => edge.vertex).join(", ")} \n`;
        }
        return graph;
    }
   
}

module.exports = {
    AdjacencyListGraph,
    WeightedAdjacencyListGraph
}