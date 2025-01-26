const EventEmitter = require('events');

// Creating a instance of EventEmitter
const newEvent = new EventEmitter();

// Register a Listener for Birthday Event
newEvent.on('birthday', (name = "Sohan") => console.log("Happy Bithday To You " + name))

// Register a Listener for Click Event
newEvent.on('click', (name = "Sohan") => console.log("You have clicked the button " + name))

// Emitting the event
newEvent.emit('birthday', "Alice")
// Emitting the event
newEvent.emit('click', "Agent L")

/* You can register different event under same instance, that is also why you need to tell which event
you are emitting in emit method */

