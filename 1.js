let mainEl = document.getElementById("main-div");
let titleEl = document.createElement("h3");
mainEl.appendChild(titleEl);
titleEl.innerHTML = "Number Fact";

let inputEl = document.createElement("input");
mainEl.appendChild(inputEl);
// let number = inputEl.value;
inputEl.placeholder = "Enter any number .... ";

let pEl = document.createElement("p");
mainEl.appendChild(pEl);

inputEl.addEventListener("input", getFactFetch);

function getFactFetch() {
  let number = inputEl.value;

  fetch("http://numbersapi.com/" + number)
    .then((response) => response.text())
    .then((data) => {
      if (number !== "") {
        //   pEl.innerText = " ";
        pEl.innerText = data;
        console.log(data);
      }
    })
    .catch((err) => console.log(err));
}
