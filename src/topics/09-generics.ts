

function whatsMyType<T>(argument: T) {
    return argument;

}

const amiString = whatsMyType<string>('Hola mundo');
const amiNumber = whatsMyType<number>(123);
const amiBoolean = whatsMyType<boolean>(true);

console.log(amiString.split(' '));
console.log(amiNumber.toFixed(2));
console.log(amiBoolean.valueOf());