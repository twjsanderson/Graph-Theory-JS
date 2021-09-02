const { AdjacencyListGraph, WeightedAdjacencyListGraph } = require('./adjacencyListGraph');

const adjacencyListGraph = new AdjacencyListGraph;

adjacencyListGraph.addVertex(1)
adjacencyListGraph.addVertex(2)
adjacencyListGraph.addVertex(3)
adjacencyListGraph.addEdge(1, 3, 2)
adjacencyListGraph.addEdge(1, 2, 4)
console.log(adjacencyListGraph.showAdjacencyList())