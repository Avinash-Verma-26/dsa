import { createNumberTree } from "./binaryTree.js";

function maxRootToLeafPathSum(tree) {
  //get leaf nodes
  //only add the biggest of the leaf nodes to the root node
  if (tree == null) return -Infinity;
  if ((tree.left == null) & (tree.right == null)) return tree.val;
  return (
    tree.val +
    Math.max(maxRootToLeafPathSum(tree.left), maxRootToLeafPathSum(tree.right))
  );
}

const tree = createNumberTree();
console.log(maxRootToLeafPathSum(tree));
