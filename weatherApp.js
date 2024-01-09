const search = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const icon = document.querySelector(".icon");

const apiKey = "790537514169f7621c8db46f98f30066";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector(".weather").style.display = "none";
    }
    else{

        const data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
               
        console.log('else');
    document.querySelector(".weather").style.display = "block";
}//else

}//function

btn.addEventListener("click", ()=>{
    checkWeather(search.value);
});
