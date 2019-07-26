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

document.addEventListener("click", function(e) {
    console.log(e)
    if (e.target.id == "boton1") {
        ejemplo1("#ejemplo1");
    }
    if (e.target.id == "boton2") {
        ejemplo2(".ejemplo2");
    }
});