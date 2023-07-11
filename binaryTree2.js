class Node {
  constructor(data) {
    this.data = data;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.right = null;
    this.left = null;
  }

  insertNode(data) {
    let newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (data < currentNode.data) {
          if (currentNode.left == null) {
            currentNode.left = newNode;
            return;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            return;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  contains(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.right;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let currentNode = this.root;
    let results = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.data);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  secondLargest() {
    let currentNode = this.root;
    let largest = 0;
    let secondLargest = 0;
    while (currentNode) {
      if (currentNode.data > largest) {
        secondLargest = largest;
        largest = currentNode.data;
      }
      currentNode = currentNode.right;
    }
    return secondLargest;
  }

  inOrder() {
    this.inOrderHelper(this.root);
  }

  inOrderHelper(currentNode) {
    if (currentNode) {
      this.inOrderHelper(currentNode.left);
      console.log(currentNode.data);
      this.inOrderHelper(currentNode.right);
    }
  }

  preOrder() {
    this.preOrderHelper(this.root);
  }

  preOrderHelper(currentNode) {
    if (currentNode) {
      console.log(currentNode.data);
      this.preOrderHelper(currentNode.left);
      this.preOrderHelper(currentNode.right);
    }
  }

  postOrder() {
    this.postOrderHelper(this.root);
  }

  postOrderHelper(currentNode) {
    if (currentNode) {
      this.postOrderHelper(currentNode.left);
      this.postOrderHelper(currentNode.right);
      console.log(currentNode.data);
    }
  }

  findClosest(target) {
    let currentNode = this.root;
    let closest = currentNode.data;
    while (currentNode) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.data)) {
        closest = currentNode.data;
      }
      if (target < currentNode.data) {
        currentNode = currentNode.left;
      } else if (target > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return closest;
  }

  distanceBetweenNodes(n1, n2) {
    if (!this.root) return -1;

    let queue = [{ node: this.root, depth: 0 }];
    let node1 = null;
    let node2 = null;
    while (queue.length) {
      let { node, depth } = queue.shift();

      if (node.data === n1) {
        node1 = depth;
      }
      if (node.data === n2) {
        node2 = depth;
      }
      if (node1 !== null && node2 !== null) {
        return node1 + node2;
      }

      if (node.left) {
        queue.push({ node: node.left, depth: depth + 1 });
        console.log(queue);
      }

      if (node.right) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }
    return -1;
  }

  validateBST() {
    if (this.isBST(this.root)) {
      console.log("it is BST");
    } else {
      console.log("not BST");
    }
  }

  isBST(currentNode, min = -Infinity, max = Infinity) {
    if (currentNode == null) return true;
    if (currentNode.data <= min || currentNode.data >= max) return false;
    return (
      this.isBST(currentNode.left, min, currentNode.data) &&
      this.isBST(currentNode.right, currentNode.data, max)
    );
  }

  removeNode(currentNode, data) {
    if (currentNode == null) {
      return null;
    } else if (data < currentNode.data) {
      currentNode.left = this.removeNode(currentNode.left, data);
      return currentNode;
    } else if (data > currentNode.data) {
      currentNode.right = this.removeNode(currentNode.right, data);
      return currentNode;
    } else {
      //no child
      if (currentNode.left == null && currentNode.right == null) {
        return null;
      }
      //One child
      else if (currentNode.left == null) {
        return currentNode.right;
      } else if (currentNode.right == null) {
        return currentNode.left;
      }
      //2 children
      else {
        let tempNode = this.findMinNode(currentNode.right);
        currentNode.data = tempNode.data;
        currentNode.right = this.removecurrentNode(
          currentNode.right,
          tempNode.data
        );
        return currentNode;
      }
    }
  }

  findMinNode(node) {
    while (node.left != null) {
      node = node.left;
    }
    return node;
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  sum() {
    return this.sumHelper(this.root);
  }

  sumHelper(root) {
    if (root == null) {
      return 0;
    }
    return root.data + this.sumHelper(root.left) + this.sumHelper(root.right);
  }

  height() {
    return this.heightHelper(this.root);
  }

  heightHelper(currentNode) {
    if (currentNode == undefined) {
      return 0;
    }
    let left = this.heightHelper(currentNode.left);
    let right = this.heightHelper(currentNode.right);

    let height = 0;

    if (left > right) {
      height = left;
    } else {
      height = right;
    }
    return height + 1;
  }
}

let tree = new Tree();
tree.insertNode(47);
tree.insertNode(21);
tree.insertNode(76);
tree.insertNode(18);
tree.insertNode(50);
tree.insertNode(85);
tree.insertNode(55);
tree.remove(52);
console.log(tree.BFS());
console.log(tree.sum());
console.log(tree.secondLargest());
// tree.BFS()
console.log(tree);
console.log(tree.distanceBetweenNodes(18, 76));
// console.log(tree.root.right.left)
tree.validateBST();
console.log(tree.height());
