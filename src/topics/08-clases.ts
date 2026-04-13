class Person {
    public name?: string;
    public age?: number;
    public profession?: string;

    constructor(name: string, age: number, profession: string) {
        this.name = 'Nicolás';
        this.age = 25;
        this.profession = 'Developer';
    }
}

const ironman = new Person('', 25, '');

class Hero extends Person {

}

console.log(ironman);