import EventEmitter from 'events';

// Crear una clase que extiende de EventEmitter
class MyEmitter extends EventEmitter {}

// Instanciar un objeto de la clase MyEmitter
const myEmitter = new MyEmitter();


// Suscribirse al evento 'event'
myEmitter.on('mievento', () => {
  console.log('Un evento ocurrió!');
});

// Emitir el evento 'event'
myEmitter.emit('mievento');
