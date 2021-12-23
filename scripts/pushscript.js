window.onload = () => {


    var https = require("https");

    var url = "https://e9f8-2001-b400-e701-4c2c-ddea-5e90-9792-bb6.ngrok.io/pdata";

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
     let places = data;
    renderPlaces(places)
     
    });
 
   });
    
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    for(let i = 0 ; i<=5;i++){
        const latitude = places[i].lat;  //修改後
        const longitude = places[i].lon; //修改後

        // add place icon 
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        //icon.setAttribute('name', place.name);         修改前
        icon.setAttribute('name', places[i].building);      //修改後
        icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/red.png');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale','10, 10');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        //const touchListener = ;

        icon.addEventListener('click', function () {
            ev.stopPropagation();
            ev.preventDefault();

            const name = ev.target.getAttribute('name');

            const el = ev.detail.intersection && ev.detail.intersection.object.el;

            if (el && el === ev.target) {
                window.alert("有喔，有點到喔!");

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
        });
    
        scene.appendChild(icon);
    }
}