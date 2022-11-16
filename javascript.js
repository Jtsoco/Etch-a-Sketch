

let gridSelector = document.querySelector(".gridSelector");

const gridContainer = document.querySelector(".gridContainer");

gridSelector.addEventListener('click', makeGrids);

//This function as of now takes the number input
//and puts back out that number of divs
function makeGrids() {

    //add a function that will remove all
    //of the child nodes before making a new grid


let gridNumber = prompt("Grid side length please!", "4")
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
//This changes all the grid boxes when hovered over







