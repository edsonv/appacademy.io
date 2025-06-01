// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    // Write your hypothesis on the time complexity of this method here
    let newNode = new DoublyLinkedNode(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) return undefined;
    const removedNode = this.head;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null; // If the list is now empty, set tail to null
    }
    this.length--;
    return removedNode.value; // Return the value of the removed node
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here
    if (!this.tail) return undefined;
    const removedNode = this.tail;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null; // If the list is now empty, set head to null
    }
    this.length--;
    return removedNode.value; // Return the value of the removed node
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) return undefined;

    return this.head.value;
  }

  peekAtTail() {
    // Return value of tail node
    // Write your hypothesis on the time complexity of this method here
    if (!this.tail) return undefined;
    return this.tail.value;
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
