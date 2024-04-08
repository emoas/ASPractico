import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Suscribirse al evento 'status', recibiendo código y mensaje como parámetros
myEmitter.on('status', (code, message) => {
  console.log(`Got ${code} and ${message}`);
});

// Emitir el evento 'status' con código y mensaje
myEmitter.emit('status', 200, 'OK');
