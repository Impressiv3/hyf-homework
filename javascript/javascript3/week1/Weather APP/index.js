let url = "";
let selectedCity = "copenhagen";
let currentLongtitude = "";
let currentLatitude = "";
const cityInputField = document.getElementById("city-input-field");
const cityWeatherButton = document.getElementById("city-weather-button");
const locationWeatherButton = document.getElementById("location-weather-button");
const weatherDisplay = document.getElementById("weather-display");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const weatherIcon = document.getElementById("weather-icon");
const windSpeed = document.getElementById("wind-speed");
const clouds = document.getElementById("clouds");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const loaderWrapper = document.getElementById("loader-wrapper");

cityInputField.addEventListener("input", () => (selectedCity = cityInputField.value));
cityWeatherButton.addEventListener("click", cityWeatherHandler);
locationWeatherButton.addEventListener("click", locationWeatherHandler);

function cityWeatherHandler() {
  url = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=REMOVEDBYUSER`;
  displayWeather(url);
}

function locationWeatherHandler() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(urlPosition);
  } else {
    alert("Not supported by this browser.");
  }
}

function urlPosition(position) {
  currentLatitude = position.coords.latitude.toFixed(2);
  currentLongtitude = position.coords.longitude.toFixed(2);
  url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongtitude}&units=metric&APPID=b680cb322879f2895f18474a69879817`;
  displayWeather(url);
}

function displayWeather(url) {
  loaderWrapper.style.display = "flex";
  setTimeout(() => {
    loaderWrapper.style.display = "none";
    weatherDisplay.style.display = "block";
  }, 2000);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerHTML = `City : ${data.name}`;
      temperature.innerHTML = `Temperature: ${data.main.temp}℃`;
      weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      windSpeed.innerHTML = `Wind speed : ${data.wind.speed} km/h`;
      clouds.innerHTML = `Clouds : ${data.weather[0].description}`;
      sunrise.innerHTML = "Sunrise : " + timeConverter(`${data.sys.sunrise}`);
      sunset.innerHTML = "Sunset : " + timeConverter(`${data.sys.sunset}`);
    })
    .catch((error) => {
      console.error(error);
    });
}

function timeConverter(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

/* b680cb322879f2895f18474a69879817 */