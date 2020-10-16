const item = document.querySelector(".container");
const calBoard = item.querySelector(".js-calBoard");
let cal = 0

function paintCalculator(event) {
    const className = event.target.className;
    const val = event.target.innerText;
    if (className === "item clean") {
        calBoard.innerHTML = 0;
    } else if (className === "item equl") {

    } else if (className === "item num") {
        calBoard.innerHTML = Number(val);
    }
}

function init() {
    item.addEventListener("click", paintCalculator)
    console.log("ho")
}

init()