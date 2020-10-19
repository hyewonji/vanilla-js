const item = document.querySelector(".container");
const calBoard = item.querySelector(".js-calBoard");
let cal = []

function paintCalculator(event) {
    const className = event.target.className;
    const val = event.target.innerText;
    if (className === "item clean") {
        calBoard.innerHTML = 0;
        cal = [];
    } else if (className === "item num") {
        console.log(cal[cal.length - 1]);
        if (cal[cal.length - 1] === Number) {
            String(cal[-1]) += val;
            console.log(cal);
        }
        //calBoard.innerHTML = Number(val);
        cal.push(Number(val));
    } else if (className === "item cal") {
        cal.push(val);
    } else if (className === "item equl") {
        calBoard.innerHTML = cal;
    }
}

function init() {
    item.addEventListener("click", paintCalculator)
    console.log("ho")
}

init()