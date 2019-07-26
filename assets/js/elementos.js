 function ejemplo1(e) {
     var t2 = document.getElementById(e);
     t2.firstChild.nodeValue = "He cambiado por medio de mi id";
 }

 function ejemplo2(e) {
     var t2 = document.getElementsByTagName(e);
     t2.firstChild.nodeValue = "He cambiado por medio de mi tag";
 }

 function ejemplo3(e) {
     var t2 = document.getElementsByClassName(e);
     t2[0].firstChild.nodeValue = "He cambiado por medio de mi clase";
 }

 document.addEventListener("click", function(e) {
     console.log(e)
     if (e.target.id == "boton1") {
         ejemplo1("ejemplo1");
     }
     if (e.target.id == "boton2") {
         ejemplo2("p");
     }
     if (e.target.id == "boton3") {
         ejemplo3("ejemplo3");
     }
 });