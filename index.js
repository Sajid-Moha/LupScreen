let table = document.querySelector(".seat-grid");
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
               'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


function createTable(numRows, numCols) {
    for (let i = numRows - 1; i >= 0; i--) {
        const row = document.createElement('tr');
        row.classList.add('row');
        row.style.height = `5rem`

        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement('td');
            // provides hover effect for pixel
            cell.classList.add('cell');
            cell.textContent = `${letters[i]}-${j + 1}`
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
} 

createTable(40, 100);