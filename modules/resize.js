/* input boxes with user-specified sizes */
let numRows = document.querySelector('#rows');
let numCols = document.querySelector('#cols');

/* submit button */
let submitSize = document.querySelector('#table-adjust');

submitSize.addEventListener('click', () => {
    /* If given size exceeds the value limits we have then don't process resize */
    if (numRows.value <= 0 || numRows.value > 52 || numCols.value <= 0 || numCols.value > 200) {
        return;
    }

    /* make sure the user knows that all their current inputted values
            will be cleared */
    let confirm = window.confirm("Current table values will be cleared,\nAre you sure you want to continue?");
    if (!confirm) {
        return;
    }

    /* delete all the seats that are currently in the grid */
    let table = document.querySelector('.seat-grid');
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    /* cur vals from students.js */
    curRows = numRows.value;
    curCols = numCols.value;
    createTable(numRows.value, numCols.value);
});

/* Initialize table at 10x10 (arbitrarily chosen size) */
createTable(10, 10);