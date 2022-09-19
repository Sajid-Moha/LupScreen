/*
Table Format (* = seat):
    [ ][1][2][3][4]      <-- col headers
    [c][*][*][*][*]
    [b][*][*][*][*]
    [a][*][*][*][*]
    ^
    row headers
*/


/* Each position on seating grid will have a seat object,
 *  grid is initialized with all empty seats
 *  if seat is empty then name, email, & level will be null
 *  each seat in grid will be clickable which will then open a modal,
 *      modal will allow student data to be altered/set.    
*/
class Seat {
    costructor (name, email, level, grid_position) {
        this.name = name;
        this.email = email;
        this.level = level;
        this.grid_position = grid_position;
    }
}

/* modal will have a 'clear seat' button to make clearing fields easy
*  function is included in prototype rather than in the class above so that
*       all instances of the class share the same function (saves space)
*/
Seat.prototype.Clear = function () {
    this.name = '';
    this.email = '';
    this.level = '';
}


let table = document.querySelector(".seat-grid");
/* vertical axis will have a max height of 52 spanning from a-Z
*  grid position will be formatted as '[vertical letter]-[horizontal pos]'
*  letters make it easier to identify which side of coord is horizontal and
*       which is vertical */
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
               'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/* Site has a field for providing the number of rows from 1 - 52
*       and num cols from 1 - 200 (arbitrary limit)
*  Submit button for resizing the grid has an event listener that clears
*       current grid and calls createTable with specified size.
*       Event listener viewable in 'resize.js' module.       
*/
function createTable(numRows, numCols) {
    /* top row = column headers */
    let topRow = document.createElement('tr');

    /*  We must add an empty cell at the beginning of first col to account for 
            row labels */
    let emptyCell = document.createElement('th');
    emptyCell.classList.add('cell');
    emptyCell.classList.add('first-col');
    topRow.appendChild(emptyCell);

    /* add the rest of the column headers from 1 rather than 0 */
    for (let i = 1; i <= numCols; i++) {
        let columnLabel = document.createElement('th');
        columnLabel.textContent = `${i}`;
        columnLabel.classList.add('cell');
        columnLabel.classList.add('first-row');
        topRow.appendChild(columnLabel);
    }

    table.appendChild(topRow);

    /* add the rest of the seats to the table */
    for (let i = numRows - 1; i >= 0; i--) {
        const row = document.createElement('tr');
        row.classList.add('row');

        let rowLabel = document.createElement('th');
        rowLabel.textContent = `${letters[i]}`;
        rowLabel.classList.add('cell');
        rowLabel.classList.add('first-col');
        row.appendChild(rowLabel);

        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement('td');
            // provides hover effect for pixel
            cell.classList.add('cell');
            cell.id = `${letters[i]}-${j + 1}`
            cell.textContent = `${letters[i]}-${j + 1}`
            /* make the cells in the table tabbable for accessibility */
            cell.setAttribute("tabindex", '0')
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}