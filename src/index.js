let apiKey = "d35a50b565e28ebd67bab25803db980c";
let units = "metric";
let temperatureElement = document.querySelector("#temp");
let currentCity = document.querySelector("#current-city");
let currentTemp = document.querySelector("#temp");

// ⏰
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[now.getDay()];

  let currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinutes = now.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  return `${currentDay} ${currentHour}:${currentMinutes}`;
}
let currentTime = document.querySelector("#current-time");
let now = new Date();
currentTime.innerHTML = formatDate(currentTime);

// 🕵️‍♀️
function citySearch(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city-input");

  currentCity.innerHTML = `${cityInput.value}`;

  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrlCity).then(showTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySearch);

// Displays Temperature
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(response);

  currentTemp.innerHTML = `${temperature}`;

  let city = response.data.name;
  currentCity.innerHTML = `${city}`;
}

// Current Location Coordinates
function currentLocation(position) {

  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiUrlCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrlCoords).then(showTemperature);
}
let currentCityTemp = document.querySelector("#current-button");
currentCityTemp.addEventListener("submit", currentLocation);
navigator.geolocation.getCurrentPosition(currentLocation);

// fix conversion functions to do the math
// conversion functions
// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let ctoFahr = (temperature * (9/5)) + 32;
//   currentTemp.innerHTML = `${ctoFahr}`;
// };

// function convertToCelsius(event){
//   event.preventDefault();
//   temperatureElement.innerHTML = `${temperature.value}`;
// }

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);

// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", convertToCelsius);


