$(document).ready(function() {
    var url = window.location.href;
    var city = url.split("=");
    var cidade = city[1].replace("%20", " ");
    var apiL = "https://api.opencagedata.com/geocode/v1/json?q=" + cidade + "&key=eb33f572930145719b950218de9decbe";

    /*api location */

    $.getJSON(apiL, function(res) {
        if (res) {
            var lat = res.results[0].geometry.lat;
            var lng = res.results[0].geometry.lng;
            /*para curtar os numeros decimais */
            lat = Math.floor(lat);
            lng = Math.floor(lng);
            /*api weather */
            var apiW = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lng;
            $.getJSON(apiW, function(jason) {
                if (jason) {
                    var icon = jason.weather[0].icon;
                    var currentTemp = jason.main.temp;
                    var maxTemp = jason.main.temp_max;
                    var minTemp = jason.main.temp_min;
                    currentTemp = Math.floor(currentTemp);
                    maxTemp = Math.floor(maxTemp);
                    minTemp = Math.floor(minTemp);
                    document.getElementById("meteoIcon").src = icon;
                    document.getElementById("currentTemp").innerText = currentTemp + "ºC";
                    document.getElementById("maxTemp").innerText = maxTemp + "ºC" + "/" + minTemp + "ºC";
                } else console.log("nada")
            });
        }
    });

    document.getElementById("nomeCidade").innerText = cidade;


});