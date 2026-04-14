
interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Juan',
    children: ['Natalia', 'Pedro']
}

const passenger2: Passenger = {
    name: 'Maria'
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, 'tiene', howManyChildren, 'hijos');
}

printChildren(passenger1);
printChildren(passenger2);