
window.addEventListener("DOMContentLoaded", (event) => {
    let sketch = document.querySelector(".sketch");

    for (let j = 1; j <= 16; j++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        sketch.appendChild(row);
    
        for (let i = 1; i <= 16; i++) {
            let column = document.createElement("div");
            column.setAttribute("class", "column");
            row.appendChild(column);
        };
    };

    let slider = document.querySelector(".slider");
    let sliderValue = document.querySelector(".sliderValue");
    
    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
    });
});