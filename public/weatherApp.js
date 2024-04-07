const search = document.querySelector('#search select');
const btn = document.querySelector('#search button');
const icon = document.querySelector(".icon");

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
        
    document.querySelector(".weather").style.display = "block";
}//else

}//function

btn.addEventListener("click", ()=>{
    checkWeather(search.value);
});

async function getOptions(){
    //here we select the drop down select element
    const select = document.querySelector('#search select')
    const url = 'cities'

    //by default when i don't set the full url
    // it will set the prefix for the url to the same domian as the page that made the request
    //so it will be: 'localhost:3000/cities' same as our node server
    //so it will be dynamic what ever was the domian it will make the request to it
    const response = await fetch('cities');
    if(response.ok){
        const json = await response.json();
        console.log(json);// the result of the request

        json.forEach(city => { //we used foreach because the response was an array

            console.log(city);// logging the city

            //creating the option element to add it to the dropdown menu
            const option = document.createElement('option');

            //here we will appned the value to the option value and InnerText that we created
            option.value = city
            option.innerText = city
            select.appendChild(option)
            //now we will add the newly created option to the serch drop down menu
            
        });

        //after we appended the option we need to append a place holder option
        //we can do it like this:
        const option = document.createElement('option');
        option.innerText = 'Select your option'// the text to be shown
        option.selected = true// here we making it select option
        option.disabled = true// the user can't reselect it if he selected another option
        select.appendChild(option)

        //try to add new cities to the API in express server
    }

}

getOptions();
