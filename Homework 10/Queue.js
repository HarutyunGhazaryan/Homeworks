class Queue {
  arr = [];

  enqueue(element) {
    this.arr.push(element);
  }

  dequeue() {
    return this.arr.shift();
  }

  front() {
    return this.arr[0];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  size() {
    return this.arr.length;
  }
  print() {
    console.log(this.arr.join(" "));
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1 2 3
console.log("Front element: " + queue.front()); // Output: Front element: 1;
queue.dequeue();
queue.print(); // Output: 2 3
console.log("Queue size: " + queue.size()); // Output: Queue size: 2
