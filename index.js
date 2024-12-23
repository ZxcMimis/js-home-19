// 1
const body = document.querySelector('body')
const openModalBtnElement = document.querySelector('[data-action="open-modal"]')
const backdropEl = document.querySelector('.js-backdrop')
const modalEl = document.querySelector('modal')
const closeModalBtmElement = document.querySelector('[data-action="close-modal"]')

openModalBtnElement.addEventListener('click', () => document.body.classList.add('show-modal'))
closeModalBtmElement.addEventListener('click', () => document.body.classList.remove('show-modal'))
backdropEl.addEventListener('click', () => document.body.classList.remove('show-modal'))

// 2
const colorRed = document.querySelector('[value="red"]')
const colorWhite = document.querySelector('[value="white"]')
const colorGreen = document.querySelector('[value="green"]')

colorRed.addEventListener('click', () => body.style.backgroundColor = colorRed.value)
colorWhite.addEventListener('click', () => body.style.backgroundColor = colorWhite.value)
colorGreen.addEventListener('click', () => body.style.backgroundColor = colorGreen.value)

// 3
const inputElement = document.querySelector('#name-input')
const spanElement = document.querySelector('#name-output')

inputElement.addEventListener('input', () => {
    spanElement.textContent = inputElement.value
})

// 4
const validInput = document.querySelector('#validation-input')
validInput.addEventListener('input', () => {
    if (validInput.value.length == 6) {
        validInput.classList.add('valid')
        validInput.classList.remove('invalid')
    } else {
        validInput.classList.add('invalid')
    }
});

// 5

    const inputEl = document.getElementById("font-size-control");
    const textEl = document.getElementById("text");

    inputEl.addEventListener("input", () => {
        textEl.style.fontSize = `${inputEl.value}px`;
    })