GRAPH TYPES

A graph is a data structure used to show relationships between entities or nodes.

Graphs fundamentally have 2 elements:
1. Nodes/Vertices
2. Edges/Weights

Each node or vertex represents an entity or distinct element in the graph. 
While edges represent the connections between nodes.

The number of edges connected to a node is often referred to as the 'degree'.

Ex. y node has a degree of 3, which means it has 3 connections (or edges) with other nodes.

-------------------------------------------------------------------------------------------

Graph Types

1. Connected Graph

    - All nodes in the graph are connected so that their is always a continuous path (via edges) from one node to any
    other node in the graph.

    1 --- 2 --- 3
          |
          |
          |
          4 --- 5 --- 6
          |
          |
          |
          7  

2. Disconnected Graph

    - A graph is disconnected if at least 2 nodes are not connected by an path (via edges and other nodes).

     1 --- 2 --- 3
           |
           |
           |
           4 --- 5 --- 6
          
          
          
           7

3. Directed Graph

    - A graph whose edges have a specific direction where one node is pointing to another node. They may also
    include sel-loops where a node is pointing to itself (see node 6 below).

    1 ---► 2 ---► 3
           ▲
           |
           |
           |
           4 ---► 5 ---► 6 ---►
           ▲             ▲    |
           |             |    ▼ 
           |             ◄-----
           |
           7   

4. Undirected Graph

    - A graph whose edges have no specific direction.

    1 --- 2 --- 3
          |
          |
          |
          4 --- 5 --- 6
          |
          |
          |
          7  

5. Weighted Graph

    - A graph whose edges/connections/branches have values or weights. This is a special type of labelled graph.
       
       20     30
    1 ---- 2 ---- 3
           |
           | 10
           |
           4 

6. Cyclic Graph

    - A graph that allows you to loop through the same node more than once. All cyclic graphs must be directional. 

    1 ---► 2 ---► 3
    ▲      |
    |      |
    |      ▼
    5 ◄--- 4 

7. Acyclic Graph

    - A directed graph that does not allow you to loop through the same node more than once.

    1 ---► 2 ---► 3
    |      |
    |      |
    ▼      ▼
    5 ◄--- 4 

8. Complete Graph

    - A directed or undirected graph where all nodes are connected (via edges) to all other nodes in the graph. 
    All complete graphs must be connected graphs. Each node should have (total # nodes - 1) edges.

        1--2
        |\/|
        |/\|
        3--4

    * Each node should have 4 - 1 edges to be a complete graph.

-------------------------------------------------------------------------------------------

A sample of graph types/combinations

1. Connected Directed Graph
2. Connected Undirected Graph
3. Disconnected Directed Graph
4. Disconnected Undirected Graph
5. Connected Directed Cyclic Graph
6. Connected Undirected Weighted Graph
7. Disconnected Directed Weighted Acyclic Graph
8. Complete Connected Directed Weighted Cyclic Graph

-------------------------------------------------------------------------------------------

