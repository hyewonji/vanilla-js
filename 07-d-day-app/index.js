const xMas = document.querySelector(".xMas");

function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    let today = new Date();
    let dDay = Math.floor((xmasDay - today) / 1000);
    let days = Math.floor(dDay / (60 * 60 * 24));
    let hours = Math.floor((dDay % (60 * 60 * 24)) / (60 * 60)); // 시
    let minutes = Math.floor((dDay % (60 * 60)) / 60); // 분
    let seconds = dDay % 60; // 초
    xMas.innerHTML = `${days > 9 ? days : `0${days}`}d ${hours > 9 ? hours : `0${hours}`
        }h ${minutes > 9 ? minutes : `0${minutes}`}m ${seconds > 9 ? seconds : `0${seconds}`
        }s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();