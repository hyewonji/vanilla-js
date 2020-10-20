const item = document.querySelector(".container");
const calBoard = item.querySelector(".js-calBoard");
let cal = ''
let num = ''

function paintCalculator(event) {
    const className = event.target.className;
    const val = event.target.innerText;
    if (className === "item clean") {
        calBoard.innerHTML = 0;
        num = '';
        cal = '';
    } else if (className === "item num") {
        num += val;
        cal += val;
        if (num === '2') {
            calBoard.innerHTML = eval(cal);
        } else {
            calBoard.innerHTML = num;
        }
    } else if (className === "item cal") {
        num = '';
        cal += val;
    } else if (className === "item equl") {
        calBoard.innerHTML = eval(cal);
        num = '';
        cal = '';
    }
}

function init() {
    item.addEventListener("click", paintCalculator)
    console.log("ho")
}

init()