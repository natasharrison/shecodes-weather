// Include the JavaScript file provided in your project, when loading your project, ask the user "Enter a city" (example: Paris), alert "It is currently 19°C (66°F) in Paris with a humidity of 80%"

// If the city doesn't exist in the object (i.e: Sydney), alert "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney". Since this is an alert, the link shouldn't be clickable.

// Add this behavior to your project and submit the CodeSandbox URL

// Note: Please round the values in the Alert to the nearest whole number (no decimal points, e.g. 5.45 should be rounded to 5).

let city = prompt("Please enter a city");

let cities = [
    {
        name: "New York",
        temp: 15,
        humidity: 10,
    },
    {
        name: "London",
        temp: 9,
        humidity: 10,
    },
    {
        name: "Cape Town",
        temp: 25,
        humidity: 20,
    },
];

if (city === "") {
    alert(
        `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
} else {
    alert(`It is currently ${(Math.round(temp))} in ${city} with a humidity of ${(Math.round(humidity))}`);
};
