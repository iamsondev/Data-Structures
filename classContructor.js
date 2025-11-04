class counter {
  constructor(count) {
    this.count = count;
  }

  add(amount) {
    this.count = this.count + amount;
  }

  print() {
    console.log(this.count);
  }
}

const counter1 = new counter(0);
counter1.add(5);
counter1.add(10);
counter1.print();

const counter2 = new counter(10);
counter2.add(20);
counter2.add(30);
counter2.print();
