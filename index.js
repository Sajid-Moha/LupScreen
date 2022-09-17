let numRows = document.querySelector('#rows');
let numCols = document.querySelector('#cols');
let submitSize = document.getElementById('table-adjust');

submitSize.addEventListener('click', () => {
    if (numRows.value <= 0 || numRows.value > 52 || numCols.value <= 0 || numCols.value > 200) {
        return;
    }

    let table = document.querySelector('.seat-grid');
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    console.log(numRows.value)
    console.log(numCols.value)
    createTable(numRows.value, numCols.value);
});

createTable(40, 100);