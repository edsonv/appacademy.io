// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    const newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;

    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length++;

    return this;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) return undefined;
    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return removedNode;
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) return undefined;
    if (!this.head.next) {
      const removedNode = this.head;
      this.head = null;
      this.length--;
      return removedNode;
    }
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    const removedNode = current.next;
    current.next = null;
    this.length--;
    return removedNode;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here
    return this.head ? this.head.value : undefined;
  }

  print() {
    // Print out the linked list
    // Write your hypothesis on the time complexity of this method here
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
