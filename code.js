
let cellArray = [];

function randomNum(){
    return Math.floor(Math.random()*255);
}

function emptyGrid(){
    let child = document.querySelector(".etchContainer");
    etchDisplay.removeChild(child);
    let newContainer = document.createElement("div");
    newContainer.setAttribute("class", "etchContainer");
    etchDisplay.appendChild(newContainer);
}

function populateGrid(gridHeight, gridWidth){
    const etchContainer = document.querySelector(".etchContainer");
    for(let i=0; i<gridHeight; i++){
        cellArray[i]=document.createElement("div");
        cellArray[i].setAttribute("class", "rows");
        etchContainer.appendChild(cellArray[i]);
        
        for(let j=0; j<gridWidth; j++){
            let pixel = document.createElement("div");
            pixel.setAttribute("class", "cell");
            pixel.addEventListener("mouseenter", ()=>{
                let r = randomNum();
                let g = randomNum();
                let b = randomNum();
                pixel.style.backgroundColor= `rgb(${r}, ${g}, ${b}, 1)`;
            });
            cellArray[i][j] = pixel;
            cellArray[i].appendChild(cellArray[i][j]);

        }
    }
}

const button = document.createElement("button");
button.textContent="change size";
etchDisplay.prepend(button);
button.addEventListener("click", ()=>{
    let size = prompt("select new size between 0 and 100");
    if(size<=100 && size>0){
        emptyGrid();
        populateGrid(size, size);
    } else{
        alert("size out of bounds");
    }
});

populateGrid(16,16);


