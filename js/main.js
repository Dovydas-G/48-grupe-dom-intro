"use strict";
import { sumavimas as sum, atimtis } from './components/sum.js';

console.log('Labas rytas, Lietuva!');

function sumavimas(a, b, c) {
    return a + b + c + 0.1;
}

console.log(sum(7, 5));
console.log(sum(-7, 5));
console.log(sum(7, -5));
console.log(sum(-7, -5));

console.log(sumavimas(7, 5));
console.log(sumavimas(-7, 5));
console.log(sumavimas(7, -5));
console.log(sumavimas(-7, -5));

console.log(atimtis(7, 5));
console.log(atimtis(-7, 5));
console.log(atimtis(7, -5));
console.log(atimtis(-7, -5));