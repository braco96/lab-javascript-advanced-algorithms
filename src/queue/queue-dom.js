const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  // Vaciar el campo de texto después de encolar
  queueInput.value = '';
};

const generateListQueue = () => {
  // Reconstruir la representación visual de la cola
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  queueUL.innerHTML = '';

  const contents = queue.display();
  const length = contents.length;
  const emptySlots = queue.MAX_SIZE - length;

  // Elementos activos
  contents.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    queueUL.appendChild(li);
  });

  // Espacios vacíos
  for (let i = 0; i < emptySlots; i++) {
    const li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    queueUL.appendChild(li);
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // Avisar de cola vacía
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerText = type;
  } else if (type === 'overflow') {
    // Avisar de cola llena
    warningTopQueue.style.display = 'block';
    warningTopQueue.innerText = type;
  }
};

const addToQueue = () => {
  try {
    // Intentar encolar el valor
    queue.enqueue(queueInput.value);
    clearQueueInput();
    generateListQueue();
  } catch (error) {
    // Cola llena → mostrar overflow
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  try {
    // Intentar desencolar
    queue.dequeue();
    generateListQueue();
  } catch (error) {
    // Cola vacía → mostrar underflow
    generateWarningQueue('underflow');
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
