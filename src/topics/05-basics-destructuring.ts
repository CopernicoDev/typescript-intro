



interface AudioPlayer {
    volume: number;
    second: number;
    song: string;
    details: Details;

}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    volume: 90,
    second: 23,
    song: 'Bohemian Rhapsody',
    details: {
        author: 'Queen',
        year: 1975
    }
};

//const { song, volume, second /*details: { author, year } Una forma de desestructurar un objeto dentro de otro */ } = audioPlayer;

//console.log(song);
//console.log(volume);
//console.log(second);
//console.log(author);
//console.log(year);

const dbz = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = dbz;
console.log(p1);
console.log(p2);
console.log(p3);
