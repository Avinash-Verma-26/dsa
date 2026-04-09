import { createNumberTree } from "./binaryTree.js";

function treeMin(tree) {
  if (tree == null) return Infinity;
  return Math.min(tree.val, treeMin(tree.left), treeMin(tree.right));
}

const tree = createNumberTree();
console.log(treeMin(tree));
