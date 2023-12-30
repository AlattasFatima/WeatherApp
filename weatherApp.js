const cityName = document.getElementById('input');
const card = document.querySelector('.card');
const btn = document.querySelector('.btn');

async function weather(){
        const inputCity = cityName.value;
        console.log(inputCity); 
    
        const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&appid=2045e4ade53044b49d1677d27402cce5`
        const res = await fetch(urlGeo)
        const json = await res.json()

        const lat = document.createElement('p');
        const lon = document.createElement('p');
        lat.innerText = json.lat;
        lon.innerText = json.lon;

        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2045e4ade53044b49d1677d27402cce5`
};

btn.addEventListener('click', weather);


