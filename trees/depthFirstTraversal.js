import { createTree } from "./binaryTree.js";

export function dfsNormal(tree) {
  //initiating the stack and the final values
  let stack = [tree];
  let values = [];
  //runs until the stack is empty
  while (stack.length != 0) {
    let current = stack.pop();
    if (current.right != null) stack.push(current.right);
    if (current.left != null) stack.push(current.left);
    values.push(current.val);
  }
  return values;
}

export function dfsRecursive(tree) {
  if (tree === null) return [];
  return [tree.val, ...dfsRecursive(tree.left), ...dfsRecursive(tree.right)];
}

//getting the binary tree
const tree = createTree();
console.log(dfsNormal(tree));
console.log(dfsRecursive(tree));
