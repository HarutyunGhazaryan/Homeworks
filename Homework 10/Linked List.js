class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const node = new Node(data);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(data) {
    const node = new Node(data);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  insert(data, index) {
    if (index < 0 || index > this.size) {
      return false;
    }

    const node = new Node(data);
    if (index === this.size) {
      this.tail.next = node;
      this.tail = node;
    } else if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
    this.size++;
  }

  printList() {
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    return list.join(" ");
  }

  getSize() {
    return this.size;
  }

  removeAt(index) {
    if (index >= this.size || index < 0) {
      return false;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      const currentData = current.next.data;
      current.next = current.next.next;
      this.size--;
      return currentData;
    }
  }
  remove(data) {
    let current = this.head;
    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
      return;
    }
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        if (current.next === null) {
          this.tail = current;
        }
        this.size--;
        return;
      }
      current = current.next;
    }
    return false;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.insert(3, 3);
console.log(list.printList()); // Output: 0 1 2 3
console.log("Size:", list.getSize()); // Output: Size: 4
list.remove(2);
list.removeAt(1);
console.log(list.printList()); // Output: 0 1
console.log("Size:", list.getSize()); // Output: Size: 2
