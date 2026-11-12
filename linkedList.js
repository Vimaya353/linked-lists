class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }
    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode === null ? undefined : this.headNode.value;
  }

  tail() {
    if (this.headNode === null) return undefined;
    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index < 0) return undefined;
    let current = this.headNode;
    let i = 0;
    while (current !== null) {
      if (i === index) return current.value;
      current = current.nextNode;
      i++;
    }
    return undefined;
  }

  pop() {
    if (this.headNode === null) return undefined;
    const value = this.headNode.value;
    this.headNode = this.headNode.nextNode;
    return value;
  }

  contains(value) {
    return this.findIndex(value) !== -1;
  }

  findIndex(value) {
    let current = this.headNode;
    let i = 0;
    while (current !== null) {
      if (current.value === value) return i;
      current = current.nextNode;
      i++;
    }
    return -1;
  }

  toString() {
    if (this.headNode === null) return "";
    let result = "";
    let current = this.headNode;
    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  // Extra credit
  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError("Index out of bounds");
    }
    if (index === 0) {
      for (let k = values.length - 1; k >= 0; k--) {
        this.prepend(values[k]);
      }
      return;
    }
    let previous = this.headNode;
    for (let i = 0; i < index - 1; i++) {
      previous = previous.nextNode;
    }
    for (const value of values) {
      const newNode = new Node(value, previous.nextNode);
      previous.nextNode = newNode;
      previous = newNode;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Index out of bounds");
    }
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }
    let previous = this.headNode;
    for (let i = 0; i < index - 1; i++) {
      previous = previous.nextNode;
    }
    previous.nextNode = previous.nextNode.nextNode;
  }
}