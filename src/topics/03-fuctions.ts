

function addNumbers(a: number, b: number) {
    return a + b;
}

function multiplyNumbers(a: number, b: number) {
    return a * b;
}

const ArrowFunction = (a: number, b: number) => {
    return `${a + b}`;
}

const result = addNumbers(1, 2);
const result2 = multiplyNumbers(1, 2);
const result3 = ArrowFunction(1, 2);

console.log({ result, result2, result3 });