(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.onload = () => {

        let places = staticLoadPlaces();
        renderPlaces(places);

};


function staticLoadPlaces() { 

    /*var https = require("https");

    var url = "https://47dd-2001-b011-e004-3b8a-55fc-aecf-5579-9338.ngrok.io/smalltest";

    var data = "";
   https.get(url, function (response) 
   {
    
    console.log("start");
    response.on("data", chunk => {
    console.log("on data");
    data += chunk;
   });

    response.on("end", () => 
    {
     data = JSON.parse(data);
     //console.log(data);
     return data;
     
    });
 
   });*/

   
   return [
        
        {
            name: "大韓名鍋",
            lat: 22.997834235861426, // add here latitude if using static data
            lon: 120.22748679070871, // add here longitude if using static data
            
        },
        {
            name: '金湖餃子館',
            lat: 22.99902284960256,
            lon: 120.22667163249339,
            
        }
    ];
}



function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        //const latitude = place.location.lat; 修改前
        //const longitude = place.location.lng; 修改前
        const latitude = place.lat;  //修改後
        const longitude = place.lon; //修改後

        // add place icon
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        //icon.setAttribute('name', place.name);         修改前
        icon.setAttribute('name', place.name);      //修改後
        //icon.setAttribute('building', place.building);   //修改後
        icon.setAttribute('src', 'map-marker.png');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale', '10, 10');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        const clickListener = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();

            const name = ev.target.getAttribute('name');

            const el = ev.detail.intersection && ev.detail.intersection.object.el;

            if (el && el === ev.target) {
                const label = document.createElement('span');
                const container = document.createElement('div');
                container.setAttribute('id', 'place-label');
                label.innerText = name;
                container.appendChild(label);
                document.body.appendChild(container);

                setTimeout(() => {
                    container.parentElement.removeChild(container);
                }, 1500);
            }
        };

        icon.addEventListener('click', clickListener);

        scene.appendChild(icon);
    });
}
},{}]},{},[1]);
