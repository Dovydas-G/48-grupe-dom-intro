const titleDOM = document.getElementById('title');
console.log(titleDOM.innerText);
console.log(titleDOM.textContent);

titleDOM.innerText = 'Kaip gaminami blynai?';
titleDOM.textContent = 'Kaip gaminami blynai???';

const ingridientsDOM = document
    .getElementsByTagName('ul')[0]
    .getElementsByTagName('li');

// const ingridients = [];

// for (let i = 0; i < ingridientsDOM.length; i++) {
//     const ingridientDOM = ingridientsDOM[i];
//     ingridients.push(ingridientDOM.innerText);
// }

// for (const ingridientDOM of ingridientsDOM) {
//     ingridients.push(ingridientDOM.innerText);
// }

const ingridients = [...ingridientsDOM].map(
    ingridientDOM => ingridientDOM.innerText
);

console.log(ingridients);

// [...ingridientsDOM].forEach(
//     ingridientDOM => ingridientDOM.innerText += ' (???)'
// );

for (const ingridientDOM of ingridientsDOM) {
    ingridientDOM.innerText += ' (???)';
}