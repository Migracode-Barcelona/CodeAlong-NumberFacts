let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input',getFactAjax);

function getFactAjax() {
    let number = numberInput.value;
    console.log(number);
}
