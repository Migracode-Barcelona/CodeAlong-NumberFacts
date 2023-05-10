let rootElement = document.getElementById("root");

let h1Element = document.createElement("h1");
h1Element.classList.add("h1");
rootElement.appendChild(h1Element);
h1Element.innerText = `Number Facts`;

let pElement = document.createElement("p");
rootElement.appendChild(pElement);
pElement.innerText = `Enter a number and get a random fact`;

let inputElement = document.createElement("input");
inputElement.type = "number";
rootElement.appendChild(inputElement);

let factDiv = document.createElement("div");
factDiv.id = `fact-div`;
rootElement.appendChild(factDiv);

let factPElement = document.createElement("p");
factPElement.id = `fact-p`;
rootElement.appendChild(factPElement);

inputElement.addEventListener(`input`, getFactFetch);

function getFactFetch() {
    let number = inputElement.value;
        fetch(`http://numbersapi.com/` + number)
        .then((response) => response.text())
        .then((data) => {
            if (number != ``) {
            factDiv.style.display = `block`;
            factPElement.innerText = data;
            }
        })
        .catch((error) => console.log(error));
}
