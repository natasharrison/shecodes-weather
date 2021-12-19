let weather = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Please enter a city");
city = city.toLowerCase();

if (weather[city] !== undefined) {
    let temperature = weather[city].temp;
    let humidity = weather[city].humidity;
    let celsiusTemperature = Math.round(temperature);
    let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

    alert(
        `It is currently ${fahrenheitTemperature}°F (${celsiusTemperature}°C) in ${city} with a humidity of ${Math.round(humidity)}%.`
    );
} else {
    alert(
        `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
};
