$(document).ready(function() {
    var url = window.location.href;
    var city = url.split("=");
    var cidade = city[1].replace("%20", " ");

    var api = "https://content.guardianapis.com/search?q=" + cidade + "&from-date=2014-01-01&api-key=6e3b4e56-6078-4ea3-8741-a27ebba8d33e";

    $.getJSON(api, function(jason) {
        if (jason) {
            var number = Math.floor(Math.random() * 9) + 0;
        }
    });
});