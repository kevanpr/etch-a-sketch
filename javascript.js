let brushColor;

window.addEventListener("DOMContentLoaded", (event) => {
    let sketch = document.querySelector(".sketch");
    let normal = document.querySelector(".normal");
    let rainbow = document.querySelector(".rainbow");
    let erase = document.querySelector(".erase");
    let clear = document.querySelector(".clear");
    let slider = document.querySelector(".slider");
    let sliderValue = document.querySelector(".sliderValue");

    // Brush color pick
    normal.addEventListener('click', function () {
        return brushColor = "normal";
    });

    rainbow.addEventListener('click', function () {
        return brushColor = "rainbow";
    });

    erase.addEventListener('click', function () {
        return brushColor = "erase";
    });

    clear.addEventListener('click', function () {
        return brushColor = "clear";
    });

    function colorBrush () {
        switch (brushColor) {
            case normal:
                this.style.backgroundColor = "black";
                break;
            case erase:
                this.style.backgroundColor = "white";
                break;
            case erase:
                this.style.backgroundColor = rainbowBrush;
                break;
            default:
                this.style.backgroundColor = "black";
        }
    }

    // rainbow brush
    function rainbowBrush () {
        // find the hue, which is a number from 0 to 360
        const hue = (frameCount * 10) % 360;
  
        // set the color and brush style
        const hsbaColor = color(`hsba(${hue}, 100%, 100%, 0.6)`);

        return hsbaColor;
    }

    // Set pixel size
    function pixelSize() {
        let gridPixels = sketch.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.remove());
        createGrid(slider.value);
    }

    function createGrid (gridNumber) { 
        let gridArea = gridNumber * gridNumber;
        for (let i = 1; i <= gridArea; i++) {
            let gridItem = document.createElement('div');
            sketch.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
            sketch.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
            sketch.insertAdjacentElement('beforeend', gridItem);
        } 
        var gridPixels = sketch.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorBrush));
    }

    /*
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

        let gridPixels = sketch.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorBrush));
    }
    */


    // On Page Load - default size
    createGrid(16);

    slider.addEventListener('mouseup', pixelSize);

    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
    });







    });



/*

let gridPixels = sketch.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorBrush));

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

        let gridPixels = sketch.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
    }

    // change color - normal mode
    function colorBlack () {
        // column.style.backgroundColor = 'black';
        let column = document.querySelectorAll('.column');
        column.addEventListener('mouseover', function (){
            this.setAttribute("class", "black");
        });
    }

    // change color - rainbow mode  
    function getRandomNumber() {
		return Math.floor(Math.random() * hex.length)
	}

    function colorRainbow () {
        let randomColor = "#"

		for (let i = 0; i < 6; i++) {
			randomColor += hex[getRandomNumber()]
		}

        column.style.backgroundColor = randomColor;
    }    

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