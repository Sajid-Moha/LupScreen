// EXPLAINING FORMAT OF UI VS BACKEND ARRAY

/*
UI Table Format (* = seat):
    [ ][1][2][3][4]      <-- col headers
    [c][*][*][*][*]
    [b][*][*][*][*]
    [a][*][*][*][*]
    ^
    row headers
*/

/* 
SEAT_GRID Array Format
    [2, 0][2, 1][2, 2][2, 3]
    [1, 0][1, 1][1, 2][1, 3]
    [0, 0][0, 1][0, 2][0, 3]

Traversing grid based on UI:
moving right: add one to column value,
              if that value is > # of cols then move to first cell of row below
moving left: subtract one from column value,
             if that value is < 0 then move to last cell of row above
moving up: add one to row value if sum isn't > # of cells
moving down: subtract one from row value if the difference isn't < 0
*/

// INITIALIZING GLOBAL VARIABLES

/* These values update when changed in resize.js */
let CUR_ROWS = 10;
let CUR_COLS = 10;

/* use 2D array to keep track of students on seating chart.
*   SEAT_GRID is renitialized any time CreateTable is called.
*/
let SEAT_GRID = [];

let TABLE = document.querySelector(".seat-grid");
/* for use in table.js, magnifier.js, resize.js */

/* vertical axis will have a max height of 52 spanning from a-Z
*  grid position will be formatted as '[vertical letter]-[horizontal pos]'
*  letters make it easier to identify which side of coord is horizontal and
*       which is vertical */
let LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
               'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
/* important for creating table cell id's in table.js */