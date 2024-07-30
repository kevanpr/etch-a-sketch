
window.addEventListener("DOMContentLoaded", (event) => {
    let sketch = document.querySelector(".sketch");
    let slider = document.querySelector(".slider");
    let sliderValue = document.querySelector(".sliderValue");

    function createGrid (gridNumber) {
        for (let j = 1; j <= gridNumber; j++) {
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            sketch.appendChild(row);
        
            for (let i = 1; i <= gridNumber; i++) {
                let column = document.createElement("div");
                column.setAttribute("class", "column");
                row.appendChild(column);
            }
        }
    }

    function pixelSize() {
        let gridPixels = sketch.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.remove());
        createGrid(slider.value);
    }
    
    // On Page Load - default size
    createGrid(16);

    slider.addEventListener('mouseup', pixelSize);

    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
    });

    });



/*

    slider.addEventListener('mouseup', () => {
        for (let j = 1; j <= slider.value; j++) {
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            sketch.appendChild(row);
        
            for (let i = 1; i <= slider.value; i++) {
                let column = document.createElement("div");
                column.setAttribute("class", "column");
                row.appendChild(column);
            };
        };
    });

    function createGrid (gridNumber) { 
        let gridArea = gridNumber * gridNumber;
        for (let i = 1; i <= gridArea; i++) {
            let gridItem = document.createElement('div');
            sketch.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
            sketch.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
            sketch.insertAdjacentElement('beforeend', gridItem);
        } 
        // let gridPixels = sketch.querySelectorAll('div');
        // gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
    }

    function pixelSize() {
        let gridPixels = sketch.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.remove());
        createGrid(slider.value);
    }

*/