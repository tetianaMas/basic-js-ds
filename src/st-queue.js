const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {
      let currentVal = this.head;

      while (currentVal.next) {
        currentVal = currentVal.next;
      }

      currentVal.next = new ListNode(value);
    }

    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return;
    } else if (this.head.next) {
      let currentHead = this.head.value;
      this.head = this.head.next;

      return currentHead;
    } else {
      let currentHead = this.head.value;
      this.head = null;

      return currentHead;
    }
  }
};
