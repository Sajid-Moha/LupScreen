let row_letter = document.querySelector('#row-letter');
let col_num = document.querySelector('#col-num');
let search_btn = document.querySelector('#search-btn');

search_btn.addEventListener('click', () => {
    let cell_id = `${row_letter.value}-${col_num.value}`;
    let cur_cell = document.getElementById(cell_id);
    cur_cell.focus();
});