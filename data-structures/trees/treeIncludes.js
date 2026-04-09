import { createTree } from "./binaryTree.js";

export function treeIncludes(target, tree) {
  if (target == null || tree == null) return false;
  let queue = [tree];
  while (queue.length != 0) {
    let current = queue.shift();
    if (current.val == target) {
      return true;
    }
    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }
  return false;
}
export function treeIncludesRecursive(target, tree) {
  if (tree == null) return false;
  if (tree.val == target) return true;
  return (
    treeIncludesRecursive(target, tree.left) ||
    treeIncludesRecursive(target, tree.right)
  );
}
//getting the binary tree
const tree = createTree();
console.log(treeIncludesRecursive("f", tree));
