//basic tree node
export class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//basic tree creation
export function createTree() {
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
export function createNumberTree() {
  //sum = 21
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);
  const d = new Node(4);
  const e = new Node(5);
  const f = new Node(6);
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  return a;
}
