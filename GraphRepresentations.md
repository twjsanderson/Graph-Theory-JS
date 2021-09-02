GRAPH REPRESENTATIONS

There are many ways to represent a graph in JS. Some common representations are easier to implement and understand
than others but they may not be as efficient for all operations and use cases.

Representations:

1. Array
2. Adjacency Matrix
3. Adjacency List
4. Array of Arrays
5. Object of Objects/Arrays


1. Array

    - We can represent simple graphs using an array. If we consider a disconnected, undirected graph, an array would
    be an excellent way to represent this data structure.

    1   3
      4
        5   8

    const graph = [1, 3, 4, 5, 8];

    - We can also consider a connected, directed graph, where the order of elements (or nodes) in the array represent
    the direction from one node to the next.

    1 -► 2 -► 4 -► 8 -► 10

    const graph = [1, 2, 4, 8, 10]

    In this case, you can imagine that using the .push() method would add an element to the end of the array, growing 
    the graph by one node in the continued direction.

    graph.push(21)

    1 -► 2 -► 4 -► 8 -► 10 -► 21

    const graph = [1, 2, 4, 8, 10, 21]

    