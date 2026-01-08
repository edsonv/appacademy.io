const helloMessage = require('./hello-message');

function sayMessage(message) {
  console.log(`"${message}"`);
}

sayMessage(helloMessage);

exports.sayMessage = sayMessage;
