

let gridSelector = document.querySelector(".gridSelector");

const gridContainer = document.querySelector(".gridContainer");

gridSelector.addEventListener('click', function()
 {makeGrids(prompt("Grid side length please!", "4"))});

//This function as of now takes the number input
//and puts back out that number of divs
function makeGrids(gridNumber) {

    //add a function that will remove all
    //of the child nodes before making a new grid



let x = ((Number(gridNumber))**2);
for (let i = 1; i <= x; i++) {
    const gridBox = document.createElement("div");
    //const content = document.createTextNode (i);

    //gridBox.append(content);
    gridBox.className = "box";

    gridContainer.appendChild(gridBox);
    gridBox.addEventListener('mouseover', changeBox)

    
   function changeBox() {
gridBox.style.backgroundColor="black"
}

}
gridSideCount = "";
for (let i = 1; i <= gridNumber; i++) {
    gridSideCount += "auto ";

}
    


gridContainer.style.gridTemplateColumns = gridSideCount;





}
//this is the slider programming
gridRange = document.getElementById("gridRange");
sliderValue = document.getElementById("slideValue");
sliderValue.innerHTML = gridRange.value
gridRange.oninput = function() {
    sliderValue.innerHTML = this.value
}



//the code for the create button
const create = document.querySelector(".createGridButton");
create.addEventListener('click', function() {
    makeGrids(sliderValue.innerHTML)
})
const clear = document.querySelector(".clear")
clear.addEventListener('click', destroyGrid)

function destroyGrid(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}



