// Array Implementation

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      this.items[0];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log("start >", this.items.join(">"), ">end");
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

queue.dequeue();
queue.print();
