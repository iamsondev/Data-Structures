class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first ? this.first.value : undefined;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const nodeToRemove = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return nodeToRemove.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
  print() {
    const array = [];
    let currentNode = this.first;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("Front -->" + array.join("-->") + "-->Back");
  }
}
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);

queue.dequeue();

queue.print();
