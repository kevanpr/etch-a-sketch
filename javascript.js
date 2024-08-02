let brushColor;

window.addEventListener("DOMContentLoaded", (event) => {
    let sketch = document.querySelector(".sketch");
    let normal = document.querySelector(".normal");
    let rainbow = document.querySelector(".rainbow");
    let erase = document.querySelector(".erase");
    let clear = document.querySelector(".clear");
    let slider = document.querySelector(".slider");
    let sliderValue = document.querySelector(".sliderValue");

    // Brush color value
    normal.addEventListener('click', function () {
        return brushColor = "normal";
    });

    rainbow.addEventListener('click', function () {
        return brushColor = "rainbow";
    });

    erase.addEventListener('click', function () {
        return brushColor = "erase";
    });

    function userColorSelection(event) {
        color = event.target.value;
    }

    function colorBrush () {
        switch (brushColor) {
            case "normal":
                this.style.backgroundColor = "black";
                break;
            case "erase":
                this.style.backgroundColor = "";
                break;
            case "rainbow":
                this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                break;
            default:
                this.style.backgroundColor = "black";
        }
    }

    normal.addEventListener('change', userColorSelection, false);
    normal.addEventListener('input', userColorSelection, false);
    rainbow.addEventListener('change', userColorSelection, false);
    rainbow.addEventListener('input', userColorSelection, false);
    erase.addEventListener('change', userColorSelection, false);
    erase.addEventListener('input', userColorSelection, false);

    // Set pixel size
    function pixelSize() {
        let gridPixels = sketch.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.remove());
        createGrid(slider.value);
    }

    slider.addEventListener('mouseup', pixelSize);

    // Show pixel size
    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
    });

    // Create canvas
    function createGrid (gridNumber) { 
        let gridArea = gridNumber * gridNumber;
        for (let i = 1; i <= gridArea; i++) {
            let gridItem = document.createElement('div');
            sketch.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
            sketch.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
            sketch.insertAdjacentElement('beforeend', gridItem);
        } 
        let gridPixels = sketch.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorBrush));    
    }

    // Default canvas size
    createGrid(16);

    // Clear canvas button
    clear.addEventListener('click', function () {
        sketch.innerHTML = "";
        createGrid(slider.value);
    });

    });