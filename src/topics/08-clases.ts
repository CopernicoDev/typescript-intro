class Person {
    public name?: string;
    public age?: number;
    public profession?: string;

    constructor() {
        this.name = 'Nicolás';
        this.age = 25;
        this.profession = 'Developer';
    }
}

const ironman = new Person();

console.log(ironman);