// Function to toggle the visibility of extra information
function exploreMore(id) {
    const infoElement = document.getElementById(id);
    if (infoElement.classList.contains("hidden")) {
        infoElement.classList.remove("hidden");
    } else {
        infoElement.classList.add("hidden");
    }
}

// Display sample weather data
const weatherData = [
    { city: "Delhi", temperature: "30°C", condition: "Sunny" },
    { city: "Mumbai", temperature: "28°C", condition: "Rainy" },
    { city: "Bangalore", temperature: "25°C", condition: "Cloudy" },
    { city: "Chennai", temperature: "32°C", condition: "Thunderstorms" },
    { city: "Kolkata", temperature: "29°C", condition: "Partly Cloudy" }
];

const displayWeatherData = () => {
    const cityWeatherDiv = document.getElementById("city-weather");
    weatherData.forEach(data => {
        const cityDiv = document.createElement("div");
        cityDiv.className = "city-weather";
        cityDiv.innerHTML = `
            <h3>${data.city}</h3>
            <p>Temperature: ${data.temperature}</p>
            <p>Condition: ${data.condition}</p>
        `;
        cityWeatherDiv.appendChild(cityDiv);
    });
};

// Initialize weather data display
displayWeatherData();
