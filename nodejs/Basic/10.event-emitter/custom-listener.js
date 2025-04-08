const EventEmitter = require('events');

// 自設的emitter
class MyCustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello';
    }

    greet(name) {
        this.emit('greeting', `${this.greeting} ${name}`);
    }
}

// 使用自設的emitter
const myCustomEmitter = new MyCustomEmitter();
myCustomEmitter.on('greeting', (input) => {
    console.log('Greeing event',input);
});

myCustomEmitter.greet('Cyrus Man2')

// Step 1: 在自設的emitter內 call greet
// Step 2: 觸發on的callback, 所以傳入參數
// Step 3: 在callback內印出來 console.log('Greeing event',`${this.greeting} ${name}`) => Greeing event Hello Cyrus Man2
