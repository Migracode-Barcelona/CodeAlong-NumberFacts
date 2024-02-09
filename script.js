const fact = document.querySelector("#fact");
let fackText = document.querySelector("#factText");

let numberInput = document.querySelector("#numberInput");
numberInput.addEventListener('input', getFactFetch);


// Here API code call from api URL and how to work on with "xhr Ajax".
// function getFactAjax(){
//     let number = numberInput.value;
//     // XHR stands for "XMLHttpRequest." It is an API (Application Programming Interface)
//     //  that provides functionality for making HTTP requests from web browsers. 
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/'+ number);

//     xhr.onload = function(){
//         if(this.status == 200 && number != ''){
//             fact.style.display = 'block';
//             fackText.innerHTML = this.responseText;
//         }
//     }
//     xhr.send();
// };


// here is the fetch function

function getFactFetch(){
    let number = numberInput.value;

    fetch('http://numbersapi.com/'+ number)
    .then(response => response.text())    // why the response is not working with .json() you can change it with text().
    .then(data => {
       if(number != ''){
        fact.style.display = 'block';
        fackText.innerHTML = data;
       }
    })
    .catch(err => console.log('err'))
}