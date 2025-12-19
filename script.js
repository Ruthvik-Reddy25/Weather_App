const apiKey = "810f3a8760fc2821bfcf249f5ef5057b";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.main) {
                alert("City not found");
                return;
            }

            document.getElementById("city").innerText = `City: ${data.name}`;
            document.getElementById("temp").innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById("desc").innerText = `Weather: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        })
        .catch(() => {
            alert("Error fetching weather data");
        });
}
