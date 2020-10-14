  // -    -   -   -   -  //
 //   HUNDREDS BOARD    //
// -    -   -   -   -  //

window.onload = function(event) {
    makeBoard()
    document.addEventListener("click", toggleColor)
    
};

function makeBoard() {
    var boardElement = document.getElementById('board')
    boardElement.style.setProperty('--grid-rows', 10);
    boardElement.style.setProperty('--grid-cols', 10);
    for (i = 0; i < 100; i++) {
        var cell = document.createElement("div")
        cell.className = "card grid-item"
        cell.innerText = i+1
        cell.setAttribute("onClick","toggleColor")
        boardElement.appendChild(cell)
    }
}

function toggleColor(event) {
    var cardClasses = event.target.classList
    if (cardClasses.contains("card")) {
        if (cardClasses.contains("green")){
            cardClasses.remove("green")
        } else {
            cardClasses.add("green")
        }
    }
    // event.target.classList
}