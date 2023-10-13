class Stack {
  arr = [];
  push(element) {
    this.arr.push(element);
  }
  pop() {
    return this.arr.pop();
  }
  top() {
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  getSize() {
    return this.arr.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Should print 2
console.log(stack.top()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1
