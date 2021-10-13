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
    this.rootNode = addWithin(data, this.rootNode);

    function addWithin(value, node) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addWithin(value, node.left);
      } else {
        node.right = addWithin(value, node.right);
      }

      return node;
    }
  }

  has(data) {
    return hasWithin(data, this.rootNode);

    function hasWithin(value, node) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      if (value < node.data) {
        return hasWithin(value, node.left);
      } else {
        return hasWithin(value, node.right);
      }
    }
  }

  find(data) {
    return findWithin(data, this.rootNode);

    function findWithin(value, node) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        return findWithin(value, node.left);
      } else {
        return findWithin(value, node.right);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(data, this.rootNode);

    function removeNode(value, node) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(value, node.left);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(value, node.right);
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

      node.left = removeNode(maxFromLeft.data, node.left);

      return node;
    }
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
