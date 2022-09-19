/* These values update when changed in resize.js */
let curRows = 10;
let curCols = 10;


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