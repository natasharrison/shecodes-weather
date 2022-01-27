let apiKey = "d35a50b565e28ebd67bab25803db980c";
let units = "imperial";
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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

// 🕵️‍♀️
function citySearch(city) {
  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrlCity).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  citySearch(city);
}

// Gets Forecast
function getForecast(coordinates) {
  console.log(coordinates);

  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${units}`;

  console.log(apiUrlForecast);

  axios.get(apiUrlForecast).then(displayForecast);
}

// Displays Current Temperature
function displayWeather(response) {
  console.log(response);
  let iconElement = document.querySelector("#icon");
  celsiusTemp = response.data.main.temp;

  document.querySelector("#current-city").innerHTML = response.data.name;

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

  document.querySelector("#temp").innerHTML = Math.round(celsiusTemp);

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}

// Current Location Coordinates
function searchCoords(position) {
  let apiUrlCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrlCoords).then(displayWeather);
}

function currentLocation(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(searchCoords);
}

let currentCityButton = document.querySelector("#current-button");
currentCityButton.addEventListener("click", currentLocation);

// display forecast days
function displayForecast(response) {
  console.log(response.data);
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row d-flex justify-content-center">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML = forecastHTML + `
      <div class="card d-flex col-2 shadow" id="forecast-card">
        <div class="card-body">
              <h5 class="card-title">${formatDay(forecastDay.dt)}</h5>
              <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="" width="42"/>
              <p><span class="card-text" id="temp-max">${Math.round(forecastDay.temp.max)}°</span> |
              <span class="card-text" id="temp-min">${Math.round(forecastDay.temp.min)}°</span></p>
        </div>
      </div>
`;
    }
  })

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

citySearch("Scottsdale");
