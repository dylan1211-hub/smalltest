var https = require("https");
//var fs = require('fs');

var url = "https://3797-2001-b011-e004-1ef2-90c7-8d0e-cb18-3a07.ngrok.io/smalltest";


var data = ""; 
https.get(url, function (response) {
    console.log("start");
    response.on("data", chunk => {
        console.log("on data");
        data += chunk;
    });

    response.on("end", () => {
        data = JSON.parse(data);
        console.log(data);
    });


});


