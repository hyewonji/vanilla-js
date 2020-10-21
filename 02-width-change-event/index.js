const body = document.querySelector("body"),
    width = document.querySelector(".width");
const colors = ["#EEBC11", "#914EAD", "#1e90ff"];

function colorChange() {
    var w = window.innerWidth;
    if (w >= 1000) {
        body.style.backgroundColor = colors[0];
        width.innerHTML = "Width is ".concat(w);
    } else if (w >= 700) {
        body.style.backgroundColor = colors[1];
        width.innerHTML = "Width is ".concat(w);
    } else {
        body.style.backgroundColor = colors[2];
        width.innerHTML = "Width is ".concat(w);
    }
}

function init() {
    window.addEventListener("resize", colorChange);
    body.style.backgroundColor = colors[0];
}

init();