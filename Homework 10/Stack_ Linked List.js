class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) return null;
    const popElement = this.tail.data;

    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      this.tail = current;
      this.tail.next = null;
    }
    this.size--;
    return popElement;
  }

  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  top() {
    return this.tail.data;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should print 2
console.log(stack.top()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1
