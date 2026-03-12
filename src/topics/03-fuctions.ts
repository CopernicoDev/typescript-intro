

function addNumbers(a: number, b: number) {
    return a + b;
}

function multiplyNumbers(a: number, b: number) {
    return a * b;
}

const ArrowFunction = (a: number, b: number) => {
    return `${a + b}`;
}

//const result = addNumbers(1, 2);
//const result2 = multiplyNumbers(1, 2);
//const result3 = ArrowFunction(1, 2);

//console.log({ result, result2, result3 });

interface Personaje {
    nombre: string;
    pv: number;
    showpv: () => void;
}

const personaje: Personaje = {
    nombre: 'Nicolás',
    pv: 100,
    showpv() {
        console.log(`Puntos de vida: ${this.pv}`);
    }
}

const heal = (personaje: Personaje, amount: number) => {
    personaje.pv += amount;
    personaje.showpv();
}

heal(personaje, 15);
