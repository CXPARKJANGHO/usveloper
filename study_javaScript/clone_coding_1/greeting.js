'use strict';

const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_CL = 'showing';

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGretting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CL);
    form.addEventListener('submit', handleSubmit);
}

function paintGretting(text) {
    form.classList.remove(SHOWING_CL);
    greeting.classList.add(SHOWING_CL);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGretting(currentUser);
    }
}
function init() {
    loadName();
}
init();
