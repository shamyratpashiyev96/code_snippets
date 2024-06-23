import { UndirectedGraph } from "./Graph/Graph.mjs";
import { UndirectedGraphize } from "./Graph/UndirectedGraphize.mjs";

function DFSorBFS(targetValue = '', isDepthFirstSearch = true){ // In DFS stack data structure is used, but in BFS queue is used.

    // It produces an object which is depicted in UndirectedGraphize.mjs file
    let undirectedGraph = UndirectedGraphize([
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n'],
    ]);

    let currentValue = 'i';      // Getting 'i' node
    let stackOrQueue = [];     // It immitates stack or queue data structure in js.
    let visitedNodes = [];

    // Looping through the graph until the value is found or (it is not in the graph or there is no path leading to it via the node 'i')
    while(currentValue != targetValue && currentValue != undefined){
        // console.log(currentValue)    // Shows the traversal path of the graph
        let currentNodeEdges = undirectedGraph[currentValue];

        for(let i = 0; i < currentNodeEdges?.length; i++){
            if(!visitedNodes.includes(currentNodeEdges[i])){    // Not adding it to the stackOrQueue if it has already been visited (in order to avoid infinite loop)
                stackOrQueue.push(currentNodeEdges[i])
            }
        }
        visitedNodes.push(currentValue);
        currentValue = isDepthFirstSearch ? stackOrQueue.pop() : stackOrQueue.shift();  // It gets the last or the first item in the list depending on the search algorithm type
    }

    return currentValue

}

console.log(DFSorBFS('m', false))