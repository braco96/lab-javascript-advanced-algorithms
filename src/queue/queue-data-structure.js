class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // Devuelve true si aún hay espacio en la cola
    return this.queueControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    // Devuelve true si no hay elementos en la cola
    return this.queueControl.length === 0;
  }

  enqueue(item) {
    // Agrega un elemento al final de la cola
    if (!this.canEnqueue()) {
      throw new Error('QUEUE_OVERFLOW');
    }
    this.queueControl.push(item);
    return this.queueControl;
  }

  dequeue() {
    // Saca el primer elemento de la cola (FIFO)
    if (this.isEmpty()) {
      throw new Error('QUEUE_UNDERFLOW');
    }
    return this.queueControl.shift();
  }

  display() {
    // Devuelve una copia de la cola actual
    return [...this.queueControl];
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
