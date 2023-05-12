document.getElementById("fetch-fact-btn").addEventListener("click", getFact);

// This will use XHR to fetch the number facts.

// function getFact() {
//   const number = document.getElementById("number-input").value;
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `http://numbersapi.com/${number}`, true);
//   xhr.onload = function () {
//     if (this.status === 200 && number !== "") {
//       document.getElementById("fact").innerText = this.responseText;
//     } else {
//       document.getElementById("fact").innerText =
//         "Please enter a valid number.";
//     }
//   };
//   xhr.send();
// }

// This will use fetch API to fetch number facts.

function getFact() {
  const number = document.getElementById("number-input").value;
  if (number !== "") {
    fetch(`http://numbersapi.com/${number}`)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("fact").innerText = data;
      })
      .catch((error) => console.log(error));
  } else {
    document.getElementById("fact").innerText = "Please enter a valid number.";
  }
}
