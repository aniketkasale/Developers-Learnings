// Implement the push method for the LinkedList class.

// Your push method should take an integer as an input, create a new Node object with that input as its value, and add it to the end of the linked list.

// Your push method should perform the following tasks:

// 1. Accept an integer value as an argument.

// 2. Create a new Node object newNode with the given value.

// 3. If the list is empty (head is null), set both the head and tail pointers of the list to the newNode.

// 4. If the list is not empty, set the next attribute of the current tail node to point to the newNode, then update the tail pointer to point to newNode.

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

  /// WRITE PUSH METHOD HERE ///
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      //if linkedlist is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if linkedlist is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.makeEmpty();
myLinkedList.push(1);
myLinkedList.push(2);

myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log("\nLinked List:");
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 1
    Tail: 2
    Length: 2

    Linked List:
    1
    2

*/
