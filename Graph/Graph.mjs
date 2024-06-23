// This is a graph implemented in adjacency list form
export class DirectedGraph{
    
    // Adding a node only if it doesn't already exist
    addNode(key = '', edges = []){
        if(this[key] == undefined){
            this[key] = edges;
        }
    }

    addEdgeBetweenNodes(fromKey = '', toKey = ''){
        if(this[fromKey] != undefined){
            this[fromKey].push(toKey)
        }
    }
}

// This is a graph implemented in adjacency list form
export class UndirectedGraph{

    // Adding a node only if it doesn't already exist
    addNode(key = '', edges = []){
        if(this[key] == undefined){
            this[key] = edges;
        }
    }

    addEdgeBetweenNodes(fromKey = '', toKey = ''){
        if(this[fromKey] != undefined && this[toKey] != undefined){
            this[fromKey].push(toKey)
            this[toKey].push(fromKey)
        }
    }

    createNodeAndaddEdgeBetween(fromKey = '', toKey = ''){
        if(this[fromKey] != undefined){
            this[fromKey].push(toKey)
        } else {
            this[fromKey] = [toKey];
        }

        if(this[toKey] != undefined){
            this[toKey].push(fromKey)
        } else {
            this[toKey] = [fromKey];
        }
    }
}