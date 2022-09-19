/* Each position on seating grid will have a seat object,
 *  grid is initialized with all empty seats
 *  if seat is empty then name, email, & level will be null
 *  each seat in grid will be clickable which will then open a modal,
 *      modal will allow student data to be altered/set.    
*/
class Seat {
    constructor (name, email, level, grid_position) {
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

let table = document.querySelector(".seat-grid");
/* vertical axis will have a max height of 52 spanning from a-Z
*  grid position will be formatted as '[vertical letter]-[horizontal pos]'
*  letters make it easier to identify which side of coord is horizontal and
*       which is vertical */
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
               'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];