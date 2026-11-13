export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  #head = null;
  #size = 0;

  append(value) {
    const node = new Node(value);
    if (this.#head === null) {
      this.#head = node;
    } else {
      let current = this.#head;
      while (current.nextNode !== null) current = current.nextNode;
      current.nextNode = node;
    }
    this.#size++;
  }

  prepend(value) {
    this.#head = new Node(value, this.#head);
    this.#size++;
  }

  size() {
    return this.#size;
  }

  head() {
    return this.#head?.value;
  }

  tail() {
    if (this.#head === null) return undefined;
    let current = this.#head;
    while (current.nextNode !== null) current = current.nextNode;
    return current.value;
  }

  at(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.#size) {
      return undefined;
    }
    let current = this.#head;
    for (let i = 0; i < index; i++) current = current.nextNode;
    return current.value;
  }

  pop() {
    if (this.#head === null) return undefined;
    const removed = this.#head;
    this.#head = removed.nextNode;
    this.#size--;
    return removed.value;
  }

  contains(value) {
    return this.findIndex(value) !== -1;
  }

  findIndex(value) {
    let current = this.#head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return -1;
  }

  toString() {
    if (this.#head === null) return "";
    let result = "";
    let current = this.#head;
    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  // Extra credit
  insertAt(index, ...values) {
    if (index < 0 || index > this.#size) {
      throw new RangeError(`Index ${index} is out of bounds`);
    }
    if (values.length === 0) return;

    // Build a chain of new nodes: first -> ... -> last
    const first = new Node(values[0]);
    let last = first;
    for (let i = 1; i < values.length; i++) {
      last.nextNode = new Node(values[i]);
      last = last.nextNode;
    }

    if (index === 0) {
      last.nextNode = this.#head;
      this.#head = first;
    } else {
      let previous = this.#head;
      for (let i = 0; i < index - 1; i++) previous = previous.nextNode;
      last.nextNode = previous.nextNode;
      previous.nextNode = first;
    }
    this.#size += values.length;
  }

  removeAt(index) {
    if (index < 0 || index >= this.#size) {
      throw new RangeError(`Index ${index} is out of bounds`);
    }
    if (index === 0) {
      this.#head = this.#head.nextNode;
    } else {
      let previous = this.#head;
      for (let i = 0; i < index - 1; i++) previous = previous.nextNode;
      previous.nextNode = previous.nextNode.nextNode;
    }
    this.#size--;
  }
}

