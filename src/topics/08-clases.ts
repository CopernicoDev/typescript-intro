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

class HeroComposition {
    constructor(
        public alterEgo: string,
        public realName: string,
        public kills: number = 0, // <- Inicializado correctamente o asignándole un valor por defecto
        public person: Person,
    ) {
    }
}

const person = new Person('Tony Stark', 45, 'Ingeniero');
const ironman = new HeroComposition('Iron Man', 'Tony Stark', 0, person);

const spiderman = new Hero('Spiderman', 'Peter Parker', 0);

console.log(person);
console.log(ironman);
console.log(spiderman);

