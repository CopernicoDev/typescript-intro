
function classDecorator(constructor: any) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
}

@classDecorator
class SuperClass {
    public myProperty: string = 'abc123';

    print() {
        console.log('Hola mundo')
    }
}

console.log(SuperClass);

const superInstance = new SuperClass();
console.log(superInstance);