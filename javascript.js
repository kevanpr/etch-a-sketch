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

    function userColorSelection(event) {
        color = event.target.value;
    }

    normal.addEventListener('change', userColorSelection, false);
    normal.addEventListener('input', userColorSelection, false);
    rainbow.addEventListener('change', userColorSelection, false);
    rainbow.addEventListener('input', userColorSelection, false);
    erase.addEventListener('change', userColorSelection, false);
    erase.addEventListener('input', userColorSelection, false);

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
      
      function draw() {
        colorMode(HSB);
        // background(frameCount % 360, 100, 100);
        if(mouseIsPressed){
         noStroke();
          stroke((5*frameCount) % 360, 40, 100);
          fill((5*frameCount) % 360, 100, 100);
      
          // ellipse(mouseX, mouseY, 30,30);
          strokeWeight(20);
          line(mouseX, mouseY, pmouseX, pmouseY);
        }
        
        colorMode(RGB);
      }

    // rainbow brush
    function rainbowBrush () {
        // find the hue, which is a number from 0 to 360
        const hue = (frameCount * 10) % 360;
  
        // set the color and brush style
        const hsbaColor = (`hsba(${hue}, 100%, 100%, 0.6)`);

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

    function userColorSelection(event) {
        color = event.target.value;
    }

    // On Page Load - default size
    createGrid(16);

    slider.addEventListener('mouseup', pixelSize);

    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
    });

    });


/*

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
*/