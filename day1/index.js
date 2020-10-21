/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");

const superEventHandler = {
    mouseover: function mouseover() {
        h2.innerHTML = "The mouse is here!";
        h2.style.color = colors[0];
    },
    mouseleave: function mouseleave() {
        h2.innerHTML = "The mouse is gone!";
        h2.style.color = colors[1];
    },
    resize: function resize() {
        h2.innerHTML = "You just resize!";
        h2.style.color = colors[2];
    },
    contextmenu: function contextmenu() {
        h2.innerHTML = "That was a right click!";
        h2.style.color = colors[3];
    }
};

h2.addEventListener("mouseover", superEventHandler["mouseover"]);
h2.addEventListener("mouseleave", superEventHandler["mouseleave"]);
window.addEventListener("resize", superEventHandler["resize"]);
window.addEventListener("contextmenu", superEventHandler["contextmenu"]);
