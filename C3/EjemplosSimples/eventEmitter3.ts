import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Suscribirse al evento 'error'
myEmitter.on('error', (err) => {
  console.error('Se ha producido un error:', err.message);
});

// Emitir un evento de error
myEmitter.emit('error', new Error('Algo salió mal'));
