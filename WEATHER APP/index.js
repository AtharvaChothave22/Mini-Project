const usertab=document.querySelector(["weather"]);
const searchtab=document.querySelector(["search weather"]);
const grantAccessContainer=document.querySelector(".grant-container");
const searchform=document.querySelector(["searchinput"]);
const loadingContainer=document.querySelector(".Load-container");
const weatherContainer=document.querySelector(".weather-container");

let oldtab=usertab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldtab.classList.add("current-tab");
getfromSessionStorage();

usertab.addEventListener("Click",()=>{
switchtab(usertab);
})
searchtabtab.addEventListener("Click",()=>{
    switchtab(searchtab);
})

function switchtab(newtab)
{
    if(oldtab!=newtab)
    {
        oldtab.classList.remove("current-tab");
        oldtab=newtab;
        newtab.classList.add("current-tab");
     
     if(!searchform.classList.contains("active"))
     {
        grantAccessContainer.classList.remove("active");
        weatherContainer.classList.remove("active");
        searchform.classList.add("active");
    }
    else{
        searchform.classList.remove("active");
        weatherContainer.classList.remove("active");
        getfromSessionStorage();
    }
}
}
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
      
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}
  function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
      
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        

    }

}

function renderWeatherInfo(weatherInfo) {
  

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
      else {
       
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let cityName = searchInput.value;
    if(cityName === "") return;

    fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try{
         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
         if(!response.ok){
             loadingScreen.classList.remove("active");
             userInfoContainer.classList.remove("active");
             notFoundContainer.classList.add("active");
         }
         else{
            const data = await response.json();
            notFoundContainer.classList.remove("active");
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.add("active");
            renderWeatherInfo(data);
         } 
    }
    catch(err){
        console.log("reached here");
        userInfoContainer.classList.remove("active");
        
    }
}
