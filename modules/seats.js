let table = document.querySelector(".seat-grid");
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
               'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


function createTable(numRows, numCols) {
    let topRow = document.createElement('tr');
    topRow.classList.add('row');

    /* We must add an empty cell at the beginning to account for 
        row labels */
    let emptyCell = document.createElement('th');
    emptyCell.classList.add('cell');
    emptyCell.classList.add('first-col');
    topRow.appendChild(emptyCell);

    for (let i = 1; i <= numCols; i++) {
        let columnLabel = document.createElement('th');
        columnLabel.textContent = `${i}`;
        columnLabel.classList.add('cell');
        topRow.appendChild(columnLabel);
    }

    table.appendChild(topRow);

    for (let i = numRows - 1; i >= 0; i--) {
        const row = document.createElement('tr');
        row.classList.add('row');
        row.style.height = `5rem`;

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
            cell.setAttribute("tabindex", '0')
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}