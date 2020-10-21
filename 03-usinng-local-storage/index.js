const select = document.querySelector("select");
const images = document.querySelector("img");

function flag(c) {
    const imgSrc = `images/${c}.jpeg`;
    images.src = imgSrc;
}

function storage(event) {
    const country = event.target.value;
    localStorage.setItem("Country", country);
    flag(country);
}

function init() {
    const currentCountry = localStorage.getItem("Country");
    if (currentCountry) {
        const option = document.querySelector(`option[value="${currentCountry}"]`);
        option.selected = true;
        flag(currentCountry);
    }
    select.addEventListener("change", storage);
}

init();