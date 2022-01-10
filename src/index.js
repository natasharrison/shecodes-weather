// ⏰
function formatDate(date) {

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

function citySearch(event){
  event.preventDefault();
  
  let cityInput = document.querySelector("#city-input");
  
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${cityInput.value}`
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySearch);

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


// Current City 

function getCurrent(){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "d35a50b565e28ebd67bab25803db980c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(citySearch);
};

let currentCityTemp = document.querySelector("#current-button");
currentCityTemp.addEventListener("submit", getCurrent);

navigator.geolocation.getCurrentPosition(getCurrent);