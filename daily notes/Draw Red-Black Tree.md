# Draw Red Black Tree

Assume Z is the node that is inserted

**Rules:** 

1. A node is either red or black
2. The root and leaves(NIL) are black
3. If a node is red, then its children are black
4. All paths from a node to its NIL descendants contain the same number of black nodes

**Strategy:** 

1. Insert Z and color it red
2. Recolor and rotate nodes to fix violation

**4 Scenarios:** 
1. Z = root -> color black
2. Z.uncle = red -> recolor Z's parent and grandparent
3. Z.uncle = black(triangle: Z and its parent are not the same side) -> rotate Z.parent
4. Z.uncle = black(line : Z and its parent are the same side) -> rotate Z.grandparent & recolor



[Left Learning Red Black Tree Insertion](https://www.geeksforgeeks.org/left-leaning-red-black-tree-insertion/) 