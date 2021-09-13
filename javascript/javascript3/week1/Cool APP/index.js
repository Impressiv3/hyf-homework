const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const submitButton = document.getElementById("submit-button");
let firstNameValue = "John";
let lastNameValue = "Doe";
const display = document.getElementById("display");
submitButton.addEventListener("click", apiRequestHandler);

function apiRequestHandler() {
  apiRequest(createURL, displayJoke);
}

function apiRequest(apiURL, functionToExecute) {
  console.log(`Starting request from : ${apiURL}`);
  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  async function getResponse(response) {
    return await response.json();
  }

  function processJSON(jsonObject) {
    console.log("Request succeeded with JSON response", jsonObject);
    functionToExecute(jsonObject);
  }

  function errorJSON(error) {
    console.log("Request failed", error);
  }

  fetch(apiURL).then(status).then(getResponse).then(processJSON).catch(errorJSON);
}

function displayJoke(jsonObject) {
  const jokeText = document.createElement("H1");
  jokeText.innerHTML = jsonObject.value.joke;
  display.appendChild(jokeText);
  console.log(jsonObject.value.joke);
}

let createURL = (function () {
  firstNameValue = firstName.value;
  lastNameValue = lastName.value;
  return (
    "http://api.icndb.com/jokes/random?firstName=" + firstNameValue + "&lastName=" + lastNameValue
  );
})();
