/* input boxes with user-specified sizes */
let num_rows = document.querySelector('#rows');
let num_cols = document.querySelector('#cols');

/* submit button */
let submit_size = document.querySelector('#table-adjust');

let min_rows = 1;
let max_rows = 52;
let min_cols = 1;
let max_cols = 200;


submit_size.addEventListener('click', () => {
    /* If given size exceeds the value limits we have then don't process resize */
    if (num_rows.value < min_rows || num_rows.value > max_rows || num_cols.value < min_cols || num_cols.value > max_cols) {
        return;
    }

    /* make sure the user knows that all their current inputted values
            will be cleared */
    let confirm = window.confirm("Current table values will be cleared,\nAre you sure you want to continue?");
    if (!confirm) {
        return;
    }

    while (TABLE.firstChild) {
        TABLE.removeChild(TABLE.firstChild);
    }

    /* cur vals from students.js */
    CUR_ROWS = num_rows.value;
    CUR_COLS = num_cols.value;
    createTable(num_rows.value, num_cols.value);
});

/* Initialize table at 10x10 (arbitrarily chosen size) */
createTable(10, 10);