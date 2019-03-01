var serverURL = 'https://parseapi.back4app.com/parse/';
var appId = "wW32hrtDDmN6bogYHa4H7vP86PZYRCg3f3pOWUh0";
var restId = "xuJvgy3fiTdLpjjStnj4LpfYnqX3JsZiZCSvNUoR";

AccessLogURL = '/classes/Accesslog';

AccessLogObj =  '{ "IP": "{IP}", "post": "{post}" }';

myBody = AccessLogObj.replace("{IP}", "127.0.0.1").replace("{post}", "tutorial");
/*const call = async() =>
{
    const response = await fetch(serverURL + AccessLogURL, {
                    method: 'POST',
                    body: myBody, // string or object
                    headers:{
                    'Content-Type': 'application/json',
                    'X-Parse-Application-Id': appId,
                    "X-Parse-REST-API-Key": restId
                    }
                });
    const myJson = await response.json();
    console.log(myJson);
}*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
};
xhttp.open("POST", serverURL + AccessLogURL, true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.setRequestHeader('X-Parse-Application-Id', appId);
xhttp.setRequestHeader("X-Parse-REST-API-Key", restId);
xhttp.send(myBody);