import { EventEmitter } from 'events';
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('completeWork', () => {
  console.log('You can play');
});
console.log("working.....");
myEmitter.emit('completeWork');