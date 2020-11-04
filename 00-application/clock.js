const clockContainer = document.querySelector(".js-clock"),
    dateTitle = clockContainer.querySelector("h3"),
    clockTitle = clockContainer.querySelector("h1");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes(),
        hours = date.getHours();
    clockTitle.innerText = `${hours>9 ? hours:`0${hours}`}:${
        minutes>9 ? minutes:`0${minutes
        }`}`;
}

function getDate(){
    const nowDate = new Date();
    const day = nowDate.getDay(),
        date = nowDate.getDate(),
        month = nowDate.getMonth(),
        year = nowDate.getFullYear();
    dateTitle.innerText = `${year}.${month}.${date} ${days[day]}`
}

function init(){
    setInterval(getTime,1000);
    getDate();
}

init();