/* Each position on seating grid will have a seat object,
 *  grid is initialized with all empty seats
 *  if seat is empty then name, email, & level will be ''
 *  each seat in grid will be clickable which will then open a modal,
 *      modal will allow student data to be altered/set.    
*/
class Seat {
    constructor (name, email, level) {
        this.name = name;
        this.email = email;
        this.level = level;
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


/* added + prefix to variables in this function because they were
        unintentionally being treated as strings */
function ConvertLetterToRow(letter, num_rows) {
    /* below statement is true when the letter is lowercase */
    if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
        let a_ascii = 97;
        let locator_value = +a_ascii + (+num_rows - 1);
        let row = locator_value - letter.charCodeAt(0);
        return (row);
    }

    /* letter is uppercase, follow similar steps but just account for
        the lower case letters before it */
    let A_ascii = 65;
    let num_lowercase_letters = 26;
    let locator_value = +A_ascii + ((num_rows - 1) - num_lowercase_letters);
    let row = locator_value - letter.charCodeAt(0);
    return row;
}


function UpdateSeat(row, col) {
    let name_input = document.querySelector('#name');
    let email_input = document.querySelector('#email');
    let cur_cell = document.querySelector(`#${LETTERS[row]}-${col + 1}`);

    SEAT_GRID[row][col].email = email_input.value;
    SEAT_GRID[row][col].name = name_input.value;

    if (name_input.value === '' && email_input.value === '') {
        cur_cell.classList.remove('taken');
        cur_cell.textContent = `${LETTERS[row]}-${col + 1}`;
    }
    else if (name_input.value === '') {
        cur_cell.classList.add('taken');
        // if email is too long, we have to trim it
        let email = EmailCondenser(SEAT_GRID[row][col].email);
        cur_cell.textContent = email;
    }
    else if (email_input.value === '') {
        cur_cell.classList.add('taken');
        let name = NameCondenser(SEAT_GRID[row][col].name);
        cur_cell.textContent = name;
    }
    else {
        cur_cell.classList.add('taken');
        let name = NameCondenser(SEAT_GRID[row][col].name);
        let email = EmailCondenser(SEAT_GRID[row][col].email);

        cur_cell.innerHTML = `
        ${name}
        <br>
        ${email}
        `;
    }
}

function NameCondenser(user_name) {
    let name = '';
    // if name is too long, we have to trim it
    if (user_name.length > 5) {
        name = user_name.substring(0, 5) + '\u2026';
    } else {
        name = user_name;
    }

    return name;
}

function EmailCondenser(email_address) {
    // if email name is too long, we have to trim it
    let email = '';
    let email_name = email_address.split('@')[0];

    if (email_name.length > 4) {
        email = email_name.substring(0, 4) + '\u2026@\u2026';
    } else {
        email = email_name + '@\u2026';
    }

    return email;
}