# Trees

1. Trees have nodes and links
2. They have familial relationship - parent has child and child has parent
3. Root has no parent
4. Leaf node has no children

## Binary Tree

1. All nodes have at most two children
2. Exactly one path between a node and a root

A -> B Is still a binary tree
A -> is also a binary tree

node -> [node.left -- node.right]

## Algorithms

### Depth First Traversal

Go all the way deep first then go horizontal.
![alt text]({AF78DD81-77DF-410E-B599-57A13843B853}.png)

It uses a data structure like stack
Stack - sequential data structure
Can add and remove items just from the top.

We maintain a stack that tracks the next node to be checked for children.
It is important to push the second child first because -

```
     A
    / \
   B   C
```

Here if we pushed B first and then C into the stack - while reading the value from the top we will pick up C(the right node) instead of B(the left node). And the output would not be an ideal DFS on binary tree

_Time Complexity_ - **O(n)** - It only goes through all the nodes once
_Space Complexity_ - **O(n)** - The stacks adds only a count of total nodes at max
