
window.addEventListener("DOMContentLoaded", (event) => {
    let sketch = document.querySelector(".sketch");

    for (let i = 1; i <= 16*16; i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        sketch.appendChild(pixel);
    };
});