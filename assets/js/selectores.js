function ejemplo1(e) {
    var x = document.querySelector(e);
    var z = x.style.fontWeight;
    x.style.fontWeight = "900";
    setTimeout(function() {
        x.style.fontWeight = z;
    }, 500);
}

function ejemplo2(e) {
    var x = document.querySelector(e);
    var z = x.style;
    x.style.fontStyle = "italic";
    x.style.fontWeight = "500";
    x.style.fontFamily = "Impact,Charcoal,sans-serif";
    x.style.fontSize = "xx-large";
    setTimeout(function() {
        x.style = z;
    }, 1000);
}

function ejemplo3(e) {
    var x = document.querySelectorAll(e);
    console.log(x)
    for (let index = 0; index < x.length; index++) {
        var z = x[index].style;
        x[index].style.fontStyle = "italic";
        x[index].style.fontWeight = "500";
        x[index].style.fontFamily = "Impact,Charcoal,sans-serif";
        x[index].style.color = obtenerColorRandom();
        x[index].style.fontSize = "x-large";
        setTimeout(function() {
            x[index].style = z;
        }, ((index + 1) * 1000));
    }

}

function obtenerColorRandom() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.addEventListener("click", function(e) {
    console.log(e)
    if (e.target.id == "boton1") {
        ejemplo1("#ejemplo1");
    }
    if (e.target.id == "boton2") {
        ejemplo2(".ejemplo2");
    }
    if (e.target.id == "boton3") {
        ejemplo3(".ejemplo3");
    }
    if (e.target.id == "boton4") {
        ejemplo3("#ejemplo4");
    }
});