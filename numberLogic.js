//
//
// Function to get facts using Fetch API
function getFact(numberInputId, factId, factTextId, type) {
  let numberInput = document.querySelector(`#${numberInputId}`);
  let fact = document.querySelector(`#${factId}`);
  let factText = document.querySelector(`#${factTextId}`);

  numberInput.addEventListener("input", () => {
    let number = numberInput.value;

    if (number !== "") {
      let url = `http://numbersapi.com/${number}/${type}`;

      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          fact.style.display = "block";
          factText.innerText = data;
        })
        .catch((err) => console.log(err));
    } else {
      fact.style.display = "none";
    }
  });
}

// Usage example for each div
getFact("numberInput1", "fact1", "factText1", "date");
getFact("numberInput2", "fact2", "factText2", "date");
getFact("numberInput3", "fact3", "factText3", "trivia");
