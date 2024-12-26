let factText = document.querySelector("#fact-p");
let numberFactH = document.querySelector("#h3");
let numberInput = document.querySelector("#number-input");
numberInput.addEventListener('input', getFactFetch);



function getFactFetch(){
    let number = numberInput.value;

    fetch("http://numbersapi.com/"+number)
        .then(Response => Response.text())
        .then(data => {
            if(number != ''){
                numberFactH.style.display = 'block';
                factText.innerHTML = data;
            }
        })
        .catch(err => console.log(err));
        
}



