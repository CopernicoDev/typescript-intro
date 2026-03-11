const skills = ['Counter', 'Fire', true];

interface Personaje {
    nombre: string;
    hp: number;
    skills: string[];
    pueblo: string;
}

const strider: Personaje = {
    nombre: 'Strider',
    hp: 100,
    skills: ['Counter', 'Fire', 'Heal'],
    pueblo: 'Valle del Sol',
};

console.log(strider);