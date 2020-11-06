const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function getTime(text) {
    const date = new Date(),
        hours = date.getHours();
    if (hours < 12) {
        greeting.innerHTML = `Good morning, ${text}`
    } else if (hours >= 12 && hours < 18) {
        greeting.innerHTML = `Good afternoon, ${text}`
    } else {
        greeting.innerHTML = `Good evening, ${text}`
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue)
    localStorage.setItem(USER_LS, currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    setInterval(getTime(text), 1000);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser)
    }
}

function init() {
    loadName();
}

init()