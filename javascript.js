

let gridSelector = document.querySelector(".gridSelector");

const gridContainer = document.querySelector(".gridContainer");

gridSelector.addEventListener('click', makeGrids);

//This function as of now takes the number input
//and puts back out that number of divs
function makeGrids() {

let gridNumber = prompt("Grid side length please!", "4")
let x = ((Number(gridNumber))**2);
for (let i = 1; i <= x; i++) {
    const gridBox = document.createElement("div");
    const content = document.createTextNode (i);

    gridBox.append(content);


    gridContainer.appendChild(gridBox);

}
gridSideCount = "";
for (let i = 1; i <= gridNumber; i++) {
    gridSideCount += "auto ";

}
    
gridContainer.style.gridTemplateColumns = gridSideCount;
}


