// ⏰
let now = new Date();

let days = [
  "Sunday",
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
];

let currentDay = days[now.getDay()];

let currentHour = now.getHours();

let currentMinutes = now.getMinutes();

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;

// 🕵️‍♀️

function citySearch(event){
  event.preventDefault();
  
  let cityInput = document.querySelector("#city-input");
  
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${cityInput.value}`
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySearch);

// 🙀Bonus Feature
// Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

function convertToFahrenheit(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 10;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
