// Implement the unshift method for the LinkedList class in JavaScript.

// Your unshift method should take an integer as an input, create a new Node object with that input as its value, and add it to the beginning of the linked list.

// The unshift method should perform the following tasks:
// 1. Accept an integer value as an argument.

// 2. Create a new Node object newNode with the given value.

// 3. If the list is empty (head is null), set both the head and tail pointers of the list to the newNode.

// 4. If the list is not empty, set the next attribute of newNode to the current head node, then update the head pointer to point to newNode.

// 5. Increase the length attribute by one.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  /// WRITE UNSHIFT METHOD HERE ///
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(2);
myLinkedList.push(3);

console.log("Before unshift():");
console.log("-----------------");
myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();

console.log("\nLinked List:");
myLinkedList.printList();

myLinkedList.unshift(1);

console.log("\nAfter unshift():");
console.log("----------------");
myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();

console.log("\nLinked List:");
myLinkedList.printList();

/*
    EXPECTED OUTPUT:

    Before unshift():
    -----------------
    Head: 2
    Tail: 3
    Length: 2

    Linked List:
    2
    3

    After unshift():
    ----------------
    Head: 1
    Tail: 3
    Length: 3

    Linked List:
    1
    2
    3

*/
