let apiKey = "d35a50b565e28ebd67bab25803db980c";
let units = "metric";
let currentCity = document.querySelector("#current-city");

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
function search(event) {
  event.preventDefault();

  let citySearch = document.querySelector("#city-input").value;

  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrlCity).then(displayWeather);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Displays Current Temperature
function displayWeather(response) {
    console.log(response);

  document.querySelector("#current-city").innerHTML = response.data.name;

  document.querySelector("#description").innerHTML = response.data.weather[0].main;

  document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}

// Current Location Coordinates
function currentLocation(position) {

  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiUrlCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrlCoords).then(displayWeather);
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


