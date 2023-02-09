// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const myInput = document.querySelector('#name-input');
const mySpan = document.querySelector('#name-output');

myInput.addEventListener('input', newInput);

function newInput(e) {
    //console.log(e.currentTarget);

    if (e.currentTarget.value === "") {
        mySpan.textContent = 'Anonymous'
    }
    mySpan.textContent = e.currentTarget.value;
    return;
};