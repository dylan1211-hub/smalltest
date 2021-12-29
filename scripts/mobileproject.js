window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: '餐廳',
           lat: 22.99823264,
           lon: 120.2184491,
           building:"計中大樓"
       },
       {
        name: '澡堂',
        lat: 22.99835242,
        lon: 120.2197066,
        building:"化學系館"
       },
       {
        name: '公園',
        lat:22.99861667,
        lon:120.2205475,
        building:"材料系館"
       }
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
    const latitude = place.lat;  //修改後
    const longitude = place.lon; //修改後

    // add place icon 
    const icon = document.createElement('a-image');
    icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    //icon.setAttribute('name', place.name);         修改前
    icon.setAttribute('name', place.name);      //修改後
    icon.setAttribute('building', place.building);
    icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/r4.png');

    // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
    icon.setAttribute('scale','5, 5');

    icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

    //const touchListener = ;

    icon.addEventListener('click', function () {
        ev.stopPropagation();
        ev.preventDefault();

        const name = ev.target.getAttribute('name');
        const building = ev.target.getAttribute('building');

        const el = ev.detail.intersection && ev.detail.intersection.object.el;

        if (el && el === ev.target) {

            const label = document.createElement('span');
            const container = document.createElement('div');
            container.setAttribute('id', 'place-label');
            label.innerHTML = "商店 : "+name+"<br/>"+"建築 : "+building;
            container.appendChild(label);
            document.body.appendChild(container);

            setTimeout(() => {
                container.parentElement.removeChild(container);
            }, 3000);
        }
    });

    scene.appendChild(icon);
   });
}