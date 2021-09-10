// TASK 4 Fetching and Waiting
/*  The 3 steps:
    Wait 3 seconds
    After 3 seconds fetch some data from any api you like
    Log out the data from the api */

// USING PROMISES AND .then

url = "https://api.chucknorris.io/jokes/random";

function delayFetch() {
  setTimeout(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.value);
      }, 3000)
      .catch((error) => {
        console.log(error.message);
      });
  });
}

delayFetch();

// USING Async / Await

setTimeout(() => {
  withAsync();
}, 3000);

async function withAsync() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.value);
}

///////////////////////////////////////////////////////////////////////////////
