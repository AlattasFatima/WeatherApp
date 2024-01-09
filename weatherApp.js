const apiKey = "790537514169f7621c8db46f98f30066";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=london";

async function checkWeather(){
    const response = await fetch(apiUrl + `appid=${apiKey}`);
    const data = await response.json();
    
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;

}

checkWeather();
