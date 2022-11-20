

let gridSelector = document.querySelector(".gridSelector");

const gridContainer = document.querySelector(".gridContainer");
//this next line is remnants from the button. I replaced it with a slider
//gridSelector.addEventListener('click', function()
 //{makeGrids(prompt("Grid side length please!", "4"))});

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

    if ((rainbowToggle === true) &&  (!gridBox.classList.contains('noChange'))){
        gridBox.style.backgroundColor= `rgb(${(Math.floor((Math.random()*255) ))},
        ${Math.floor((Math.random()*255) + 1)}, 
         ${Math.floor((Math.random()*255) + 1)})`;
         gridBox.classList.add("noChange")
   
}
else {
gridBox.style.backgroundColor= desiredColor
}

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

desiredColor = "black";

const colorSelect = document.querySelector(".colorSelect");
colorSelect.addEventListener('click', selectColor);

function selectColor(){
   desiredColor = prompt("What color do you want?", "black")
};
//this takes care of the rainbow settings
const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener('click', makeRainbow)

rainbowToggle = false;
//rainbow function

function makeRainbow() {
    if (rainbowToggle === true) {
        rainbowToggle = false
    }
    else if (rainbowToggle === false)
    {rainbowToggle = true}


}