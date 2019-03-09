var appId = "wW32hrtDDmN6bogYHa4H7vP86PZYRCg3f3pOWUh0";
var restId = "xuJvgy3fiTdLpjjStnj4LpfYnqX3JsZiZCSvNUoR";

var data = JSON.stringify({
    "post": window.location.href.replace("https://racass.github.io/", "").replace("/", ""),
    "Navegador": window.navigator.userAgent,
    "Linguagem": window.navigator.language
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      //console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://parseapi.back4app.com/classes/AccessLog");
  xhr.setRequestHeader("X-Parse-Application-Id", "wW32hrtDDmN6bogYHa4H7vP86PZYRCg3f3pOWUh0");
  xhr.setRequestHeader("X-Parse-REST-API-Key", "xuJvgy3fiTdLpjjStnj4LpfYnqX3JsZiZCSvNUoR");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("cache-control", "no-cache");
  
  xhr.send(data);
