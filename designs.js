/* jshint esnext: true */

/** Defining variables
 * Accessing the DOM using methods of the document object
 * @chooseGrid select size input and assign to variable
 * @gridHeight assign variable height
 * @gridWidth assign variable width
 * @designCanvas assign variable to grid sizes 
 * @pickColor select color
 */

const chooseGrid = document.querySelector("#sizePicker");
const gridHeight = document.querySelector("#inputHeight");
const gridWidth = document.querySelector("#inputWidth");
const pickColor = document.querySelector("#colorPicker");
const designCanvas = document.querySelector("#pixelCanvas");

// select color variant
pickColor.addEventListener("click", () => {});

// When size is submitted by the user, call makeGrid()
chooseGrid.onsubmit = function(event) {
    event.preventDefault();
    emptyGrid();
    makeGrid();
};

function makeGrid() {

    // Your code goes here
    /** Declaring functions and attaching them to DOM objects as event listeners
     * @columnCell creates grid squares when called
     * @column - number of squares representing the width of the grid
     * @row - number of squares representing the height of the grid
     */
    for (let row = 0; row < gridHeight.value; row++) {
        const tableRow = designCanvas.insertRow(row);
        for (let column = 0; column < gridWidth.value; column++) {
            const columCell = tableRow.insertCell(column);
            columCell.addEventListener("click", colorSquare);
        }
    }
}

// clears grid on restart (submit)

function emptyGrid() {
    while (designCanvas.firstChild) {
        designCanvas.removeChild(designCanvas.firstChild);
    }
}

// Color square using selected color pick

function colorSquare() {
    this.setAttribute("style", `background-color: ${pickColor.value}`);
}
