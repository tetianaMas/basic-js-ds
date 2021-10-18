const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addRecursive(this.rootNode, newNode);
    }
  }

  addRecursive(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left) {
        this.addRecursive(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else {
      if (node.right) {
        this.addRecursive(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }

  has(data) {
    return this.hasRecursive(data, this.rootNode);
  }

  hasRecursive(data, node) {
    if (!node) {
      return false;
    } else if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this.hasRecursive(data, node.left);
    } else {
      return this.hasRecursive(data, node.right);
    }
  }

  find(data) {
    return this.findRecursive(data, this.rootNode);
  }

  findRecursive(data, node) {
    if (!node) {
      return null;
    } else if (data < node.data) {
      return this.findRecursive(data, node.left);
    } else if (data > node.data) {
      return this.findRecursive(data, node.right);
    } else {
      return node;
    }
  }

  remove(data) {
    this.rootNode = this.removeRecursive(data, this.rootNode);
  }

  removeRecursive(value, node) {
    if (!node) {
      return null;
    }

    if (value < node.data) {
      node.left = this.removeRecursive(value, node.left);
      return node;
    } else if (value > node.data) {
      node.right = this.removeRecursive(value, node.right);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
    }

    if (!node.left) {
      node = node.right;
      return node;
    }

    if (!node.right) {
      node = node.left;
      return node;
    }

    let maxFromLeft = node.left;
    while (maxFromLeft.right) {
      maxFromLeft = maxFromLeft.right;
    }

    node.data = maxFromLeft.data;

    node.left = this.removeRecursive(maxFromLeft.data, node.left);

    return node;
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
};
