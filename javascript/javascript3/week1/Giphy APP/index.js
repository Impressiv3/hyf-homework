/*
1. Create search field.
2. Create select input for how many to display.
3. Create button to submit forms and do the API Query.
4. Write JS where I call the API with the given parameters from user.
5. Display the given images on page.
*/

let url = "";
const search = document.getElementById("search");
const display = document.getElementById("display");
const counter = document.getElementById("counter");
const submitButton = document.getElementById("submit-button");
let counterValue = 5;
let searchValue = "";
counter.addEventListener("input", () => {
  counterValue = counter.value;
});
search.addEventListener("input", () => {
  searchValue = search.value;
});
submitButton.addEventListener("click", displayGifs);

function displayGifs() {
  url = `https://api.giphy.com/v1/gifs/search?api_key=REMOVEDBYUSER&q=${searchValue}&limit=${counterValue}&offset=0&rating=g&lang=en`;
  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function getResponse(response) {
    return response.json();
  }

  function processJSON(jsonObject) {
    console.log("Request succeeded with JSON response", jsonObject);
    jsonObject.data.forEach((image) => {
      const img = document.createElement("IMG");
      img.src = `${image.images.downsized.url}`;
      display.appendChild(img);
      console.log(image.url);
    });
  }

  function errorJSON(error) {
    console.log("Request failed", error);
  }

  fetch(url).then(status).then(getResponse).then(processJSON).catch(errorJSON);
}

