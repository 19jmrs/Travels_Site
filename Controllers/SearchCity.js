function Exist() {
    var con = new XMLHttpRequest();
    a = document.getElementById("cidade_pesquisa").value;
    if (a != "") {
        var local = a.split(",");
        var city = local[0];
        var country = local[1];


        api = "http://battuta.medunes.net/api/country/search/?country=" + country + "&region=&city=" + city + "&key=e96670b241422233b9c803f1677d8661";

        con.open("GET", api, true);
        con.onreadystatechange = function() {

            if ((con.readyState == 4) && (con.status = 200)) {
                var jason = JSON.parse(con.responseText);
                console.log(jason);
                if (jason.length > 0) {
                    window.location.href = "../Views/cidades.html?city=" + city;
                } else alert("No match found!");
            }
        }
        con.send();

    } else {
        alert("Campo vazio");
    }
}