const data1 = ['Miltai', 'Druska', 'Vanduo', 'Kiausiniai'];
const data2 = ['Mikseris', 'Keptuve', 'Saukstas', 'Lekste'];

const ulDom = document.querySelectorAll('.list')
const firstUlDom = document.querySelectorAll('.list')[0];


function renderList (listDom, data) {
    let HTML = '';

    for (const item of data) {
        if (item.trim().length === 0) {
            continue;
        }
        HTML += `<li>${item}</li>`;
    }

    listDom.innerHTML = HTML;
}


renderList(ulDom[0], data1);
renderList(ulDom[1], data2);
