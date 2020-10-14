// <⚠️ DONT DELETE THIS ⚠️>
//import "day9.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.querySelector(".js-toDo"),
    input = form.querySelector("input"),
    pending = document.querySelector(".pending"),
    finished = document.querySelector(".finished");

const toDos_LS = "toDos";
let toDos = [];

const dones_LS = "done";
let dones = [];

function saveToDos() {
    localStorage.setItem(toDos_LS, JSON.stringify(toDos));
}

function saveDones() {
    localStorage.setItem(dones_LS, JSON.stringify(dones));
}

function delLists(event) {
    const btn = event.target,
        li = btn.parentNode;
    if (li.className == "pending") {
        pending.removeChild(li);
        const cleanToDos = toDos.filter(function (toDo) {
            return toDo.id !== parseInt(li.id);
        });
        toDos = cleanToDos;
        saveToDos();
    } else {
        finished.removeChild(li);
        const cleanDones = dones.filter(function (done) {
            return done.id !== parseInt(li.id);
        });
        dones = cleanDones;
        saveDones();
    }

}

function paintToDo(text) {
    const li = document.createElement("li"),
        toDoList = document.createElement("span"),
        finBtn = document.createElement("button"),
        delBtn = document.createElement("button"),
        newId = toDos.length + 1;
    toDoList.innerText = text;
    finBtn.innerText = "✅"
    delBtn.innerText = "❌"
    li.appendChild(toDoList);
    li.appendChild(finBtn);
    li.appendChild(delBtn);
    li.id = newId;
    li.className = "pending"
    pending.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
    delBtn.addEventListener("click", delLists);
    finBtn.addEventListener("click", function () { paintDone(text) });
    finBtn.addEventListener("click", delLists);
}

function paintDone(text) {
    const li = document.createElement("li"),
        doneList = document.createElement("span"),
        backBtn = document.createElement("button"),
        delBtn = document.createElement("button"),
        newId = dones.length + 1;
    doneList.innerText = text;
    backBtn.innerText = "⏪"
    delBtn.innerText = "❌"
    li.appendChild(doneList);
    li.appendChild(backBtn);
    li.appendChild(delBtn);
    li.id = newId;
    li.className = "finished"
    finished.appendChild(li);
    const doneObj = {
        text: text,
        id: newId
    }
    dones.push(doneObj);
    saveDones();
    delBtn.addEventListener("click", delLists);
    backBtn.addEventListener("click", function () { paintToDo(text) });
    backBtn.addEventListener("click", delLists);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintToDo(currentValue);
    input.value = "";
}

function loadToDos() {
    const loadToDos = localStorage.getItem(toDos_LS);
    const loadDones = localStorage.getItem(dones_LS);
    if (loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
    if (loadDones !== null) {
        const parsedDone = JSON.parse(loadDones);
        parsedDone.forEach(function (done) {
            paintDone(done.text);
        })
    }
}


function init() {
    loadToDos();
    form.addEventListener("submit", handleSubmit);
}


init();