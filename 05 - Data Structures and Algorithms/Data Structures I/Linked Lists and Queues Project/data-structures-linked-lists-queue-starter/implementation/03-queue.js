const { SinglyLinkedNode } = require('./01-singly-linked-list');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    // Add node to end of queue (linked list)

    // Write your hypothesis on the time complexity of this method here
    const newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) return null; // If the queue is empty, return null
    const removedNode = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null; // If the queue is now empty, set tail to null
    }
    this.length--;
    return removedNode.value; // Return the value of the removed node
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
