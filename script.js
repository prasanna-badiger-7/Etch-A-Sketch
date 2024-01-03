const gridContainer = document.querySelector(".grid-container");
const reset = document.querySelector(".reset");
const resize = document.getElementById("dim");
const defaultSize = "16";
const audio = document.getElementById("scribble");


function createGrid(size) {
    let area = size * size;
    for (let i = 0; i <= area; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        
    }
    // creates the rows and columns as per the size
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // assigns pixel to the rows and columns
    let gridPixels = document.querySelectorAll(".grid-item");
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", changeColor));

};


function changeColor() {
    this.style.backgroundColor = "red";
    audio.play(); // Added scribble sound effect

}


function clearAll() {
    let gridBox = document.querySelectorAll(".grid-item");
    gridBox.forEach(gridBox => gridBox.style.backgroundColor = "honeydew");

}


function gridSize() {
    clearAll();
    const value = resize.value;
    createGrid(value);

}


resize.addEventListener("change", gridSize);
reset.addEventListener("click", clearAll);
createGrid(defaultSize);


