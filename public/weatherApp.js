const search = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const icon = document.querySelector(".icon");

const apiKey = "790537514169f7621c8db46f98f30066";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    
    else{

        document.querySelector('.error').style.display = "none";
        document.querySelector(".weather").style.display = "block";

        const data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
        switch (data.weather[0].main) {
            
            case 'Clear':
                icon.src = "Media/clear.png"
                break;
        
            case 'Clouds':
                icon.src = "Media/clouds.png"
                break;

            case 'snow':
                icon.src = "Media/snow.png"
                break;

            case 'Rain':
                icon.src = "Media/rain.png"
                break;

            case 'drizzle':
                icon.src = "Media/drizzle.png"
                break;

            case 'mist':
                icon.src = "Media/mist.png"
                break;
                
            default:
                icon.src = " "
                break;
        }//switch
        
          
        
        console.log('else');
    document.querySelector(".weather").style.display = "block";
}//else

}//function

btn.addEventListener("click", ()=>{
    checkWeather(search.value);
});

