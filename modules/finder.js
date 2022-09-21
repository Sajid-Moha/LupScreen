let row_letter = document.querySelector('#row-letter');
let col_num = document.querySelector('#col-num');
let search_btn = document.querySelector('#search-btn');

search_btn.addEventListener('click', () => {
    if (row_letter.value.length != 1 || !/[a-zA-Z]/.test(row_letter.value)) {
        return;
    }
    let cell_id = `${row_letter.value}-${col_num.value}`;
    let cur_cell = document.getElementById(cell_id);
    if (!cur_cell) {
        alert('coordinate not in range!');
        return;
    }
    cur_cell.focus();
});