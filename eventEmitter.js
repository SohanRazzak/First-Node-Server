const EventEmitter = require('events');

// Creating a instance of EventEmitter
const newEvent = new EventEmitter();

// Register a Listener for Birthday Event
newEvent.on('birthday', (name) => console.log("Happy Bithday To You " + name))

// Emitting the event
newEvent.emit()