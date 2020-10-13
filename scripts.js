  // -    -   -   -   -  //
 //   HUNDREDS BOARD    //
// -    -   -   -   -  //

window.onload = function(event) {
    makeBoard()
};

function makeBoard() {
    var boardElement = document.getElementById('board')
    var number = 1
    var currentRow = 1
    let board = "<hr>"
    for (i = number; i <= 100; i++) {
        board += "<span>" + i + "</span> "
        if (i % 10 === 0) {
            board += "</br>"
        }
    }
    boardElement.innerHTML = board
}