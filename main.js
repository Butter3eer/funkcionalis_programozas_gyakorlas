import lista from './dolgozok.json';
import './style.css';

const ferfiDolgozokSzama = lista.filter(dolgozok => dolgozok.nem == "férfi").length;
console.log("Férfik száma: " + ferfiDolgozokSzama);

const noiDolgozokSzama = lista.filter(dolgozok => dolgozok.nem == "nő").length;
console.log("Nők száma: " + noiDolgozokSzama);

const sokFizusEmberek = lista.filter(dolgozok => parseInt(dolgozok.fizetes) > 150000);
console.log("150 000-nél többet keresők: ");
console.table(sokFizusEmberek);

const nagyEmberek = lista.filter(dolgozok => dolgozok.nev.includes("Nagy"));
console.log("Nagy vezetéknevűek: ");
console.table(nagyEmberek);

const kiskoruak = lista.filter(dolgozok => dolgozok.kor < 18).map(dolgozok => dolgozok.nev + " " + dolgozok.fizetes);
console.log("Kiskorúak: ");
console.table(kiskoruak);