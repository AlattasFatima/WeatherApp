const cityInput = document.querySelector('#cityInput');
const btn = document.querySelector('.btn');
const icon = document.querySelector(".icon");

const apiKey = "f7ddb153b0f6be15f081c6592030412b"; // استبدل YOUR_API_KEY بمفتاح API الخاص بك
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerText = `${data.main.humidity}%`;
        document.querySelector(".wind").innerText = `${data.wind.speed} km/h`;

        // تغيير الأيقونة بناءً على حالة الطقس
        const weatherCondition = data.weather[0].main.toLowerCase();
        const weatherIcons = {
            clear: "Media/clear.png",
            clouds: "Media/clouds.png",
            snow: "Media/snow.png",
            rain: "Media/rain.png",
            drizzle: "Media/drizzle.png",
            mist: "Media/mist.png"
        };

        icon.src = weatherIcons[weatherCondition] || "Media/default.png"; 

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    } catch (error) {
        document.querySelector('.error').style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

// عند الضغط على زر البحث
btn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

// تشغيل البحث عند الضغط على Enter
cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        btn.click();
    }
});
