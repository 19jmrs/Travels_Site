$(document).ready(function() {
    var url = window.location.href;
    var city = url.split("=");
    var cidade = city[1].replace("%20", " ");
    var api = "https://api.unsplash.com/search/photos?page=1&query=" + cidade;

    $.ajaxSetup({
        headers: { "Authorization": "Client-ID 3b8e9df532180e7d425077d4c1d6899664e8f4533cc401d580382f222dcb1e71" }
    });

    $.getJSON(api, function(jason) {
        if (jason) {
            document.getElementById("img1").src = jason.results[0].urls.raw;
            document.getElementById("img2").src = jason.results[1].urls.raw;
            document.getElementById("img3").src = jason.results[2].urls.raw;
            document.getElementById("img4").src = jason.results[3].urls.raw;
            document.getElementById("img5").src = jason.results[4].urls.raw;
            document.getElementById("img6").src = jason.results[5].urls.raw;
            document.getElementById("img7").src = jason.results[6].urls.raw;
            document.getElementById("img8").src = jason.results[7].urls.raw;
            document.getElementById("img9").src = jason.results[8].urls.raw;
        }
    });
});


$(document).ready(function() {
    var small = { width: "100%", height: "500px" };
    var large = { width: "100%", height: "1000px" };
    var count = 1;
    $("#img1").css(small).on('click', function() {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});

$(document).ready(function() {
    var small = { width: "49%", height: "150px" };
    var large = { width: "100%", height: "1000px", marginLeft: "auto", marginRight: "auto" };
    var count = 1;
    $("#img2").css(small).on('click', function() {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});
$(document).ready(function() {
    var small = { width: "49%", height: "150px" };
    var large = { width: "100%", height: "1000px", marginLeft: "auto", marginRight: "auto" };
    var count = 1;
    $("#img3").css(small).on('click', function() {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});

$(document).ready(function() {
    var small = { width: "49%", height: "150px" };
    var large = { width: "100%", height: "1000px", marginLeft: "auto", marginRight: "auto" };
    var count = 1;
    $("#img4").css(small).on('click', function() {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});

$(document).ready(function() {
    var small = { width: "49%", height: "150px" };
    var large = { width: "100%", height: "1000px", marginLeft: "auto", marginRight: "auto" };
    var count = 1;
    $("#img5").css(small).on('click', function() {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});

$(document).ready(function() {
    var small = { width: "49%", height: "150px" };
    var large = { width: "100%", height: "1000px", marginLeft: "auto", marginRight: "auto" };
    var count = 1;
    $("#img6").css(small).on('click', function() {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});

$(document).ready(function() {
    var small = { width: "49%", height: "150px" };
    var large = { width: "100%", height: "1000px", marginLeft: "auto", marginRight: "auto" };
    var count = 1;
    $("#img7").css(small).on('click', function() {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});

$(document).ready(function() {
    var small = { width: "49%", height: "150px" };
    var large = { width: "100%", height: "1000px", marginLeft: "auto", marginRight: "auto" };
    var count = 1;
    $("#img8").css(small).on('click', function() {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});

$(document).ready(function() {
    var small = { width: "49%", height: "150px" };
    var large = { width: "100%", height: "1000px", marginLeft: "auto", marginRight: "auto" };
    var count = 1;
    $("#img9").css(small).on('click', function() {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});