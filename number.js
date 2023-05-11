let fact = document.querySelector("#fact");
let factTextact = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");
numberInput.addEventListener("input", getFacts);
//////////////////////////The first way//////////////////

function getFacts(even) {
  let number = even.target.value;
  let xtr = new XMLHttpRequest();
  xtr.open(`GET`, `http://numbersapi.com/${number}`);
  xtr.onload = function () {
    if (this.status == 200 && number !== "") {
      fact.style.display = "block";
      factTextact.innerHTML = this.response;
    }
  };

  xtr.send();
}

//////////////////////////The second way//////////////////
// function getFacts(even) {
//   let number = even.target.value;
//   fetch(`http://numbersapi.com/${number}`)
//     .then((response) => response.text())
//     .then((data) => {
//       if (number !== "") {
//         fact.style.display = "block";
//         factTextact.innerHTML = data;
//       }
//     })
//     .catch((err) => console.log(err));
// }

/////////////////////////The third way/////////////////
// function getFacts(even) {
//   let number = even.target.value;
//   async function get() {
//     let response = await fetch(`http://numbersapi.com/${number}`);
//     let data = await response.text();
//     function gets(data) {
//       if (number !== "") {
//         fact.style.display = "block";
//         factTextact.innerHTML = data;
//       }
//     }
//     gets(data);
//   }

//   get();
// }
