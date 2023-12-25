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
  
