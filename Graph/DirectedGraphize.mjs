import { DirectedGraph } from "./Graph.mjs";

export function DirectedGraphize(edges_array = []){
    let directedGraph = new DirectedGraph();
    edges_array.forEach((x) => {
        directedGraph.addNode(x[0]);
        directedGraph.addEdgeBetweenNodes(x[0], x[1]);
    });
    return directedGraph;
}

let directedGraph = DirectedGraphize([
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]);
console.log(directedGraph);

/*
    It produces an object like:
    { 
        i: [ 'j' ],
        k: [ 'i', 'l' ],
        m: [ 'k' ],
        o: [ 'n' ]
    }
    
    Or a graph that can be depicted as below:

                        i   ------------>  j
                        |
                        |
                        | // k -> i
            m --------> k   ------------>  l


            o --------> n
 */