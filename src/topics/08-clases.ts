class Person {
    constructor(
        public name: string,
        public age: number,
        public profession: string
    ) { }
}

class Hero extends Person {
    constructor(
        public alterEgo: string,
        public realName: string,
        public kills: number = 0 // <- Inicializado correctamente o asignándole un valor por defecto
    ) {
        super(realName, kills, 'Superhéroe');
    }
}

const ironman = new Person('Tony Stark', 45, 'Ingeniero');

const spiderman = new Hero('Spiderman', 'Peter Parker', 0);

console.log(ironman);
console.log(spiderman);

