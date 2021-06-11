const os = require('os');

const user = os.userInfo();
console.log(user);

console.log(`The system uptime is ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    mem: os.totalmem(),
    freeMem: os.freemem(),clearImmediate
}


console.log(currentOS)