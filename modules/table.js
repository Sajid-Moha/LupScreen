/*
Table Format (* = seat):
    [ ][1][2][3][4]      <-- col headers
    [c][*][*][*][*]
    [b][*][*][*][*]
    [a][*][*][*][*]
    ^
    row headers
*/

/* use 2D array to keep track of students on seating chart.
*   Anytime table is regenerated this array is created as an empty 2d array
*       of the same size.
*/
let seat_grid = [];

// createTable does the below steps while creating the UI for the grid
//      because it saves computation
/*
for (let i = 0; i < curRows; i++) {
    let seat_row = [];
    for (let j = 0; j < curCols; j++) {
        seat_row.push(new Seat('', '', ''));
    }

    seat_grid.push(seat_row);
} 

*/


/*
*   Event listener that calls this function is viewable in 'resize.js' module.       
*/
function createTable(numRows, numCols) {
    /* intialize backend empty seat chart */
    seat_grid = []

    /* top row = column headers */
    let topRow = AddColumnLabels(numCols);
    table.appendChild(topRow);

    /* add the rest of the seats to the table */
    /* front of seating chart at bottom so start from last letter to first */
    for (let i = numRows - 1; i >= 0; i--) {
        /* BACKEND GRID WORK: row to be added to grid */
        seat_row = []

        const row = document.createElement('tr');
        row.classList.add('row');

        /* letter at beginning of each row */
        let rowLabel = AddRowLabel(letters[i]);
        row.appendChild(rowLabel);

        for (let j = 0; j < numCols; j++) {
            /* BACKEND GRID WORK: add an empty seat for each column */
            seat_row.push(new Seat('', '', ''));

            let cell = CreateCell(`${letters[i]}-${j + 1}`);
            cell.addEventListener('click', (e) => {
                let cell_row = ConvertLetterToRow(letters[i], curRows);
                seat_grid[cell_row][j].name = 'hello';
                console.log(seat_grid[cell_row][j])
            })
            row.appendChild(cell);
        }

        /* BACKEND GRID WORK: add the row of size numCols to the grid.
            this will happen numRows times for a numRows*numCols size grid */
        seat_grid.push(seat_row);
        table.appendChild(row);
    }
}

function AddColumnLabels(num_cols) {
    let column_labels = document.createElement('tr');

    /*  We must add an empty cell at the beginning of first row to account for 
            row labels */
    let emptyCell = document.createElement('th');
    emptyCell.classList.add('cell');
    emptyCell.classList.add('first-col');
    column_labels.appendChild(emptyCell);

    /* add the rest of the column headers from 1 rather than 0 */
    for (let i = 1; i <= num_cols; i++) {
        let label = document.createElement('th');
        label.textContent = `${i}`;
        label.classList.add('cell');
        label.classList.add('first-row');
        column_labels.appendChild(label);
    }

    return column_labels;
}

function AddRowLabel(label_letter) {
    let rowLabel = document.createElement('th');
    rowLabel.textContent = label_letter;
    rowLabel.classList.add('cell');
    rowLabel.classList.add('first-col');
    return rowLabel;
}

function CreateCell(position) {
    const cell = document.createElement('td');
    // provides hover effect for pixel
    cell.classList.add('cell');
    cell.id = position;
    cell.textContent = position;
    /* make the cells in the table tabbable for accessibility */
    cell.setAttribute("tabindex", '0');
    return cell;
}