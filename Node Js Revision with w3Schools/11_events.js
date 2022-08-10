/**
 * Every action on a computer is an event. Like when a connection is made or a file is opened.
 * To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object
 * 
 */
 var events = require('events');
 var eventEmitter = new events.EventEmitter();

//  Create an event handler:
var myAnotherEventHandler = function () {
    console.log('Now, I am a Backend Developer');
  }
  
//Assign the event handler to an event:
eventEmitter.on('myAchievement', myAnotherEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('myAchievement');

var myAnotherEventHandler2 = function () {
    console.log('Now, I am a Backend Developer');
  }
  
//Assign the event handler to an event:
eventEmitter.on('myAchievement2', myAnotherEventHandler2);

//Fire the 'scream' event:
eventEmitter.emit('myAchievement2');

var myAnotherEventHandler3 = function(){
    console.log("Now, I am a Backend Developer");
}
eventEmitter.on('myAchievement3',myAnotherEventHandler);
eventEmitter.emit('myAchievement3');
  