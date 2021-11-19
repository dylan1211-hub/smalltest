window.onload = () => {
    let method = 'static';

    // if you want to statically add places, de-comment following line
    //method = 'dynamic';

    if (method === 'static') {
        let places = staticLoadPlaces();
        renderPlaces(places);
    }

    if (method !== 'static') {

        // first get current user location
        return navigator.geolocation.getCurrentPosition(function (position) {

            // than use it to load from remote APIs some places nearby
            dynamicLoadPlaces(position.coords)
                .then((places) => {
                    renderPlaces(places);
                })
        },
            (err) => console.error('Error in retrieving position', err),
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 27000,
            }
        );
    }
};

var https = require("https");
var fs = require('fs');

var url = "https://21fb-2001-b011-e004-1cc5-2d5e-1fe-403a-4fb8.ngrok.io/smalltest";


https.get(url, function (response) 
{
var data = "";
console.log("start");
response.on("data", chunk => {
    console.log("on data");
    data += chunk;
});

response.on("end", () => 
{
    data = JSON.parse(data);
    //console.log(data);
});

});

function staticLoadPlaces() { 

    return data;
    
    /*[
        
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
    ];*/
}

// getting places from REST APIs
/*function dynamicLoadPlaces(position) {
    let params = {
        radius: 300,    // search places not farther than this value (in meters)
        clientId: 'HZIJGI4COHQ4AI45QXKCDFJWFJ1SFHYDFCCWKPIJDWHLVQVZ',   // add your credentials here
        clientSecret: '',   // add your credentials here
        version: '20300101',    // foursquare versioning, required but unuseful for this demo
    };

    // CORS Proxy to avoid CORS problems
    let corsProxy = 'https://cors-anywhere.herokuapp.com/';

    // Foursquare API
    let endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
        &ll=${position.latitude},${position.longitude}
        &radius=${params.radius}
        &client_id=${params.clientId}
        &client_secret=${params.clientSecret}
        &limit=15
        &v=${params.version}`;
    return fetch(endpoint)
        .then((res) => {
            return res.json()
                .then((resp) => {
                    return resp.response.venues;
                })
        })
        .catch((err) => {
            console.error('Error with places API', err);
        })
};*/

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