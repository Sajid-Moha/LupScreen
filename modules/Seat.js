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