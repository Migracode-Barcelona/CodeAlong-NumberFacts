const input = document.querySelector("#number-fact");

let pFact = document.querySelector("#fact-p");
let divFact = document.querySelector(".fact-holder");

input.addEventListener("input", getFactFetch);

// function getFactAjax() {
//   let number = input.value;
//   //console.log(number);
//   let xhr = new XMLHttpRequest();
//   xhr.open("Get", "http://numbersapi.com/" + number);

//   xhr.onload = function () {
//     if (this.status == 200 && number != "") {
//       console.log(xhr.responseText);
//       divFact.style.display = "block";
//       pFact.textContent = xhr.response;
//     }
//   };
//   xhr.send();
// }

function getFactFetch() {
  let number = input.value;

  fetch("http://numbersapi.com/" + number)
    .then((Response) => Response.text())
    .then((data) => {
      if (number != "") {
        pFact.textContent = data;
        divFact.style.display = "block";
      }
    })
    .catch("Error is: ", Error);
}
