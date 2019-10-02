const Node = require("./node");

class LinkedList {
  constructor() {
    this._head = this._tail = new Node();
    this.length = 0;
  }

  append(data) {
    if (this.length == 0) {
      this._head = this._tail = new Node(data, null, null);
    } else {
      let b = this._head;
      while (b.next != null) b = b.next;
      b.next = new Node(data, b, null);
      this._tail = b.next;
    }
    this.length++;
    return this;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    let b = this._head;
    let i = 0;
    while (i != index) {
      b = b.next;
      i++;
    }
    return b.data;
  }

  insertAt(index, data) {
    if (index == 0) {
      this._head = new Node(data, null, this._head);
      this._head.next.prev = this._head;
    } else {
      let b = this._head;
      let i = 0;
      while (i != index) {
        b = b.next;
        i++;
      }
      b.prev.next = new Node(data, b.prev, b.prev.next);
      b.prev = b.prev.next;
    }
    this.length++;
    return this;
  }

  isEmpty() {
    return this.length > 0 ? false : true;
  }

  clear() {
    this._head = this._tail = new Node();
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    if (this.length <= 1) {
      return this.clear();
    } else {
      let b = this._head;
      let i = 0;
      while (i != index) {
        b = b.next;
        i++;
      }
      b.prev.next = b.next;
      b.next.prev = b.prev;
      this.length--;
      return this;
    }
  }

  reverse() {
    let b = this._head;
    this._tail = this._head;
    for (let i = 0; i < this.length - 1; i++) {
      b = b.next;
      b.prev.next = b.prev.prev;
      b.prev.prev = b;
    }
    b.next = b.prev;
    b.prev = null;
    this._head = b;
    return this;
  }

  indexOf(data) {
    let b = this._head;
    let i = 0;
    while (i != this.length) {
      if (b.data == data) return i;
      else {
        b = b.next;
        i++;
      }
    }
    return -1;
  }
}

module.exports = LinkedList;
