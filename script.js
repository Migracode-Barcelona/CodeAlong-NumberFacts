let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');


//with Ajax
// numberInput.addEventListener('input',getFactAjax);



/* function getFactAjax() {
    let number = numberInput.value;


let xhr = new XMLHttpRequest();
xhr. open ('GET', 'http://numbersapi.com/'+number);

xhr.onload = function() {
if (this.status == 200 && number != '') {
console.log(this.responseText);

    fact.style.display = 'block'; 
    factText.innerText = this.responseText;
}

}
xhr. send() ;
} */

//with fetch
numberInput.addEventListener('input',getFactFetch);

function getFactFetch() {
    let number = numberInput.value;
    
    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())//if we work with  json so response should be json not text 
        .then(data => {
            if (number !== '') {
                fact.style.display = 'block';
                factText.innerText = data; // here data will be returned
            }
        })
        .catch(err => console.log(err));
}