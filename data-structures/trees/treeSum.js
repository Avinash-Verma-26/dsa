import { createNumberTree } from "./binaryTree.js";

export function treeSum(tree) {
  if (tree == null) return 0;
  return tree.val + treeSum(tree.left) + treeSum(tree.right);
}

const tree = createNumberTree();
console.log(treeSum(tree));
