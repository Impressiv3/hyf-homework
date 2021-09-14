// TASK 1 - Movies exercise
// Create an array of bad movies

const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

const badMovies = fetch(url)
  .then((response) => response.json())
  .then((data) => data.filter((item) => item.rating <= 4 && item.year));
console.log(badMovies);

// 2. Creat an array of bad movies since year 2000

const getBadMoviesSince2000 = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.filter((item) => item.rating <= 4 && item.year >= 2000);
};
console.log(getBadMoviesSince2000());

///////////////////////////////////////////////////////////////////////////////

async function getData(url) {
  let response = await fetch(url);
  if (response.status >= 200 && response.status < 300) {
    let data = response.json();
    return data;
  } else {
    throw new Error(response.status);
  }
}

const newBadMoviesArrayAfter2000 = async () => {
  const data = await getData(url);
  return data.filter((item) => item.rating <= 4 && item.year >= 2000);
};
console.log(newBadMoviesArrayAfter2000());

///////////////////////////////////////////////////////////////////////////////
