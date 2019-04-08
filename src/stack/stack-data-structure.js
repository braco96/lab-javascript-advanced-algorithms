class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // Devuelve true si aún hay espacio en la pila
    return this.stackControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    // Devuelve true si no hay elementos en la pila
    return this.stackControl.length === 0;
  }

  push(item) {
    // Agrega un elemento al tope de la pila
    if (!this.canPush()) {
      throw new Error('STACK_OVERFLOW');
    }
    this.stackControl.push(item);
    return this.stackControl;
  }

  pop() {
    // Saca el último elemento agregado (LIFO)
    if (this.isEmpty()) {
      throw new Error('STACK_UNDERFLOW');
    }
    return this.stackControl.pop();
  }

  display() {
    // Devuelve una copia del contenido actual de la pila
    return [...this.stackControl];
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
