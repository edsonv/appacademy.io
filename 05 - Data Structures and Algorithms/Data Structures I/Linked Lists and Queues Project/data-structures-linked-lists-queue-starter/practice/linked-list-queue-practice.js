// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }

      curr.next = newNode;
    }

    this.length++;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity
    return this.length;
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    // Write your hypothesis on the time complexity of this method here
    let sum = 0;
    if (!this.head) return sum;

    sum += this.head.value;

    let curr = this.head;
    while (curr.next) {
      sum += curr.next.value;
      curr = curr.next;
    }

    return sum;
  }

  averageValue() {
    // Returns the average value of all the nodes
    // Write your hypothesis on the time complexity of this method here
    if (this.length === 0) return 0;
    return this.sumOfNodes() / this.length;
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) return undefined;

    let i = 0;
    let curr = this.head;

    while (i < n) {
      curr = curr.next;
      i++;
    }

    return curr;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
    let middle = Math.floor((this.length - 1) / 2);

    return this.findNthNode(middle);
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
    const reversedList = new SinglyLinkedList();
    let current = this.head;

    while (current) {
      const newNode = new SinglyLinkedNode(current.value);
      newNode.next = reversedList.head;
      reversedList.head = newNode;
      reversedList.length++;
      current = current.next;
    }

    return reversedList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    let prev = null;
    let current = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

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

  addToTail(val) {
    const newNode = new DoublyLinkedNode(val);
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

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
    let middle = Math.floor((this.length - 1) / 2);
    let i = 0;
    let current = this.head;

    while (i < middle) {
      current = current.next;
      i++;
    }

    return current;
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
    const reversedList = new DoublyLinkedList();
    let current = this.tail;

    while (current) {
      reversedList.addToTail(current.value);
      current = current.prev;
    }

    return reversedList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // because we swapped next and prev
    }

    // Swap head and tail
    if (temp) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
