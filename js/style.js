const h1DOM = document.getElementById('title');

h1DOM.innerText = 'Kaip gaminami blynai?';
h1DOM.style.color = 'red';
h1DOM.style.fontSize = '40px';

console.log(h1DOM.classList.length);

for (const cssClass of h1DOM.classList) {
    console.log(cssClass);
}


h1DOM.classList.add('main-title');
h1DOM.classList.add('red');
h1DOM.classList.add('bold');
h1DOM.classList.add('italic');
h1DOM.classList.remove('italic');

console.log(h1DOM.classList);