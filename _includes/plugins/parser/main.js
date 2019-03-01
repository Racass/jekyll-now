var serverURL = 'https://parseapi.back4app.com/parse/';
var appId = "wW32hrtDDmN6bogYHa4H7vP86PZYRCg3f3pOWUh0";
var restId = "xuJvgy3fiTdLpjjStnj4LpfYnqX3JsZiZCSvNUoR";

AccesLogURL = '/classes/Accesslog';

AccesLogObj =  '{ "IP": "{IP}", "post": "{post}" }';

myBody = AccessLogObj.replace("{IP}", "127.0.0.1").replace("{post}", "tutorial");
const call = async() =>
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
}