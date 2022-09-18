/* table var declared in seats.js */

let rowLetter = document.querySelector('#row-letter');
let colNum = document.querySelector('#col-num');
let searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
    let id = `${rowLetter.value}-${colNum.value}`;
    let curCell = document.getElementById(id);
    curCell.focus();

    console.log(curCell)
});