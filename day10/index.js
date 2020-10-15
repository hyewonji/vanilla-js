const number = document.querySelector(".js-number");
const slider = document.querySelector(".js-slider"),
    inputSlider = slider.querySelector("input");
const chooseNum = document.querySelector(".chooseNum"),
    playBtn = document.querySelector(".playBtn");
const result = document.querySelector(".result"),
    gameResult = document.querySelector(".gameResult");



function winLost(n, ran) {
    if (n === ran) {
        gameResult.innerHTML = "You win!";
    } else {
        gameResult.innerHTML = "You lost!";
    }
}

function randomNum(min, max, n) {
    ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    result.innerHTML = `You chose: ${n}, the machine chose: ${ranNum}`;
    winLost(n, ranNum);
}

function playGame(n) {
    const range = inputSlider.value;
    if (n > Number(range)) {
        alert(`You can't over ${range}`);
    } else {
        randomNum(0, range, n);
    }
}


function rangeChange() {
    const range = inputSlider.value;
    number.innerText = `Generate a number between 0 and ${range}`;
    chooseNum.max = range;
}

function init() {
    inputSlider.addEventListener("mousemove", rangeChange);
    playBtn.addEventListener("click", function () { playGame(Number(chooseNum.value)) });
}

init();