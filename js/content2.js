const data = [
    [
        {
            title: 'Ingredientai',
            list: ['Miltai', '', 'Druska', 'Vanduo', 'Kiaušiniai'],
        },
        {
            title: 'Įranga/įrankiai',
            list: ['Mikseris', '        ', 'Keptuvė', ' ', 'Šaukštas', 'Lėkštė'],
        },
    ],
    [
        {
            title: 'Ingredientai',
            list: ['Miltai', '', 'Druska', 'Vanduo', 'Kiaušiniai'],
        },
        {
            title: 'Įranga/įrankiai',
            list: ['Mikseris', '        ', 'Keptuvė', ' ', 'Šaukštas', 'Lėkštė'],
        },
    ]
];

const contentDOM = document.getElementById('content');

let HTML = '';



for (const row of data) {
    let columnsHTML = '';
    for (const column of row) {
        let liHTML = '';
        for (const item of column.list) {
            if (item.trim().length === 0) {
                continue;
                
            }
            liHTML += `<li>${item}</li>`;
        } 
        
        columnsHTML += `<div class="column">
                    <h2 id="title2">${column.title}</h2>
                    <ul class="list">
                         ${liHTML}
                    </ul>
                </div>`
        
    }

    HTML += `
        <div class="row">
            ${columnsHTML}
        </div>
    `;
    
}

contentDOM.innerHTML = HTML;


