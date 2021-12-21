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

// 🕵️‍♀️Feature #2
// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

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

// Code it inside VS Code or Sandbox. Move your code into a CodeSandbox and submit the URL of the working version.