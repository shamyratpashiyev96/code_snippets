import { BSTNode } from "./BSTNode.mjs";

export class BinarySearchTree{

    // = new BSTNode() part has no logical purpose, it is just to define arguments' type
    constructor(rootNode = new BSTNode()){
        this.rootNode = rootNode;
    }
    // Adding a node using recursion (using helper function so it starts from rootNode)
    addNode(node){
        this.rootNode = this.addNodeHelper(node, this.rootNode);
    }

    // Returns a rootNode with deep tree structure
    // = new BSTNode() part has no logical purpose, it is just to define arguments' type
    addNodeHelper(node = new BSTNode(), parentNode = new BSTNode()){
        // If it is the first node to be added to this tree, then it means it is the root node so it just returns a node itself
        if(parentNode.value == undefined){
            parentNode = node;
            return parentNode;
        // If value is less than the currentNode it sets it as a left child and with the help of recursion it creates whole subtree and assigns it as leftChild
        } else if(node.value < parentNode.value){
            parentNode.setLeftChild(this.addNodeHelper(node, parentNode.leftChild)); 
        } else if(node.value > parentNode.value){
            parentNode.setRightChild(this.addNodeHelper(node, parentNode.rightChild));
        }
        return parentNode;
    }

    findValue(value = 0){
        return this.findValueHelper(value, this.rootNode);
    }

    // Finds a certain value using recursion (first starts from the rootNode)
    findValueHelper(value = 0, currentNode = new BSTNode()){

        // If the value is less than the currentNode being compared against, we go to the left passing leftChild as a current node for next recursion
        if(value < currentNode.value){
            return this.findValueHelper(value, currentNode.leftChild)

        // If the value is greater than the currentNode being compared against, we go to the rigth passing rightChild as a current node for next recursion
        } else if(value > currentNode.value){
            return this.findValueHelper(value, currentNode.rightChild)
        // If the value is equal to the currentNode value it means we have found the value we've been looking for and we can just break the recursion and return the value
        } else if(value == currentNode.value){
            return currentNode.value
        }

        // If none of those above has been triggered it means that the tree doesn't contain the value we've been looking for or it is not sorted correctly
        return undefined;
    }
}