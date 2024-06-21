import { UndirectedGraph } from "./Graph.mjs";

export function UndirectedGraphize(edges_array = []){
    let undirectedGraph = new UndirectedGraph();
    edges_array.forEach((x) => {
        undirectedGraph.addEdgeBetweenNodes(x[0], x[1]);
    });
    return undirectedGraph;
}

let undirectedGraph = UndirectedGraphize([
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]);
console.log(undirectedGraph);

/*
    It produces an object like:
    { 
        i: [ 'j', 'k' ],
        j: [ 'i' ],
        k: [ 'i', 'm', 'l' ],
        m: [ 'k' ],
        l: [ 'k' ],
        o: [ 'n' ],
        n: [ 'o' ]
    }
    
    Or a graph that can be depicted as below:

                        i ------------ j
                        |
                        |
                        |
                        k ------------ l
                        |
                        |
                        |
                        m


                        o -------- n
 */