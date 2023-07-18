const apiKey = "2aa10f1ccaf02789e2ed210ac7a364ba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city = document.getElementById("cityname");
const searchBtn= document.getElementById("search-btn");
const icon= document.getElementById("icons");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status== '404'){
        document.getElementById("err").innerHTML ="*city not found ";
    }
    else{
    var data = await response.json();
    
    document.getElementById("city").innerHTML=data.name;
    document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.getElementById("humid").innerHTML=data.main.humidity+"%"+"<p>HUMIDITY</p>";
    document.getElementById("wind").innerHTML=data.wind.speed+"Km/hr"+"<p>WIND</p>";
    

    if(data.weather[0].main=='Clouds'){
    icon.src ="./images/clouds.png";
    }
    else if(data.weather[0].main=='Clear'){
        icon.src="./images/clear.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        icon.src ="./images/drizzle.png";
    }
    else if(data.weather[0].main=='Mist'){
        icon.src ="./images/mist.png";
    }
    else if(data.weather[0].main=='Rain'){
        icon.src ="./images/rain.png";
    }
    else if(data.weather[0].main=='Snow'){
        icon.src="./images/snow.png";
    }
    document.getElementById("weather").style.display="block";
}
}
searchBtn.addEventListener("click", ()=>{
   
    checkWeather (city.value); 
    })
