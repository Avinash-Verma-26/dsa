import { createTree } from "./binaryTree.js";

export function bfs(tree) {
  if (tree === null) return null;
  let queue = [tree];
  let values = [];
  while (queue.length != 0) {
    let current = queue.shift();
    values.push(current.val);
    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }
  return values;
}
//getting the binary tree
const tree = createTree();
console.log(bfs(tree));
