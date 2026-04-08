import { Node } from "./binaryTree.js";

function createTree() {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  return a;
}

function dfs(tree) {
  //initiating the stack and the final values
  let stack = [];
  let values = [];
  stack.push(tree);
  //runs until the stack is empty
  while (stack.length != 0) {
    let current = stack.pop();
    if (current.right != null) stack.push(current.right);
    if (current.left != null) stack.push(current.left);
    values.push(current.val);
  }
  return values;
}

//getting the binary tree
const tree = createTree();
console.log(dfs(tree));
