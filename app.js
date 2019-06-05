window.addEventListener ('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector(".temperature span");
    var fondoTiempo = document.querySelector("body");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/30a0a1deb5b8512aa9b6789ef5f99624/${lat},${long}?units=auto&lang=es`;
        
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, summary, icon } = data.currently;
                    //set DOM elements from api
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                        // FORMULA CALSIUS
                        //let celsius = (temperature - 32) * (5 / 9);
                    
                    //Set Icons
                    setIcons(icon, document.querySelector(".icon"));

                    /*//Change temp to Cº /faranheit
                    temperatureSection.addEventListener("click", () => {
                        if (temperatureSpan.textContent === "F") {
                        temperatureSpan.textContent = "ºC";
                        temperatureDegree.textContent = Math.floor(celsius);
                        } else {
                            temperatureSpan.textContent = "F";
                            temperatureDegree.textContent = temperature;
                        }
                    });*/
                });
        });
              
    }
 function setIcons(icon, iconID){
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
 }
//Cambia color del fondo dependiendo del tiempo
if (temperatureDescription === "Despejado") {
}else {document.getElementById("body    ").innerHTML;

}



});