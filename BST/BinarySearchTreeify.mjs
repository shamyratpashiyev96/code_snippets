
import { BSTNode } from "./BSTNode.mjs";
import { BinarySearchTree } from "./BinarySearchTree.mjs";

export function BinarySearchTreeify(inputArray = []){
    // Creating a tree instance that will contain all its nodes inside
    let bst = new BinarySearchTree();

    // Removing duplicate values by converting it into Set and converting it back to array
    inputArray = [...new Set(inputArray)];

    // Sorting inputArray in ASC order
    inputArray = inputArray.sort((a, b) => a - b);

    return pluckMiddleItem(inputArray, bst)
}

function pluckMiddleItem(inputArray = [], bst = new BinarySearchTree()){
    // Getting the middle value item and dividing it further into two groups if it hasn't reached the leaves (the bottom of tree) yet
    if(inputArray.length >= 3){
        const middleIndex = Math.floor(inputArray.length / 2);
        let leftGroup = inputArray.slice(0, middleIndex); // startIndex inclusive, endIndex exclusve.
        let rightGroup = inputArray.slice(middleIndex+1, inputArray.length);

        bst.addNode(new BSTNode(inputArray[middleIndex]))
        pluckMiddleItem(leftGroup, bst);
        pluckMiddleItem(rightGroup, bst);
    // Just adding the leaves if it has reached the bottom of the tree
    } else {
        inputArray.forEach(x => {
            bst.addNode(new BSTNode(x))
        })
    }
    return bst;

}

// This would produce a Binary Search Tree like below:
let bst = BinarySearchTreeify([6, 2, 7, 4, 9, 8, 3, 12, 15, 13, 11, 1, 5, 10, 14,14,14,14]);
console.log(bst.findValue(133))


/*
                                                             8
                                                           /   \
                                                          /     \
                                                         /       \
                                                        /         \
                                                       /           \
                                                     4              12 
                                                    / \           /    \
                                                   /   \         /      \
                                                  2     6       10      14
                                                 /\    / \     /  \     / \
                                                /  \  /   \   /    \   /   \
                                               1    3 5    7 9     11 13   15

*/