function click() {
    //var t2 = document.getElementById(e);
    //t2.firstChild.nodeValue = "He cambiado por medio de mi id";
    alert("Haz hecho click");
}

function dbclick() {
    alert("Haz hecho doble click");
}

function mouseovers() {
    alert("Estas sobre el boton :D")
}

document.addEventListener("click", function(e) {
    // console.log(e)
    if (e.target.id == "boton1") {
        click();
    }
});

document.addEventListener("dblclick", function(e) {
    console.log(e)
    if (e.target.id == "boton2") {
        dbclick();
    }
});

document.addEventListener("mouseover", function(e) {
    //console.log(e)
    if (e.target.id == "boton3") {
        mouseovers();
    }
});

document.addEventListener("keypress", function(e) {
    alert("Haz presionado la tecla " + String.fromCharCode(e.which));
});