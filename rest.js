window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
    {
        type:"Toilet",                 //計中大樓
        name: 'Toilet',
        lat: 22.99814739768845,
        lon: 120.218542786768,
        building:"CNC",
    },
    {
        type:"Water",                 //格致堂
        name: 'Water',
        lat: 22.997083676005182, 
        lon: 120.21959954231058,
        building:"格致堂",
    },
    {
        type:"Bench",                 //紅磚地
        name: 'Bench',
        lat: 22.99891081812526, 
        lon: 120.2201228333546,
        building:"red floor",
    }
   ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    for(let i = 0;i<=0;i++){
        const latitude = places[i].lat;  //修改後
        const longitude = places[i].lon; //修改後

        // add place icon 
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', places[i].name);      //修改後
        icon.setAttribute('building', places[i].building);
        icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/toilets.png');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale','10, 10');

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
                label.innerHTML = "商店 : "+name+"<br/>"+"建築 : "+building+"<br/>";
                container.appendChild(label);
                document.body.appendChild(container);

                setTimeout(() => {
                    container.parentElement.removeChild(container);
                }, 3000);
            }
        });

        const title = document.createElement('a-text');
        title.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        title.setAttribute('value', places[i].name);
        title.setAttribute('scale', '20 20 20');
        title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
    
    
        scene.appendChild(icon);
        scene.appendChild(title);
    }
    for(let i = 1;i<=1;i++){
        const latitude = places[i].lat;  //修改後
        const longitude = places[i].lon; //修改後

        // add place icon 
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', places[i].name);      //修改後
        icon.setAttribute('building', places[i].building);
        icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/water.png');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale','10, 10');

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
                label.innerHTML = "商店 : "+name+"<br/>"+"建築 : "+building+"<br/>";
                container.appendChild(label);
                document.body.appendChild(container);

                setTimeout(() => {
                    container.parentElement.removeChild(container);
                }, 3000);
            }
        });

        const title = document.createElement('a-text');
        title.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        title.setAttribute('value', places[i].name);
        title.setAttribute('scale', '20 20 20');
        title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
    
    
        scene.appendChild(icon);
        scene.appendChild(title);
    }
    for(let i = 2;i<=2;i++){
        const latitude = places[i].lat;  //修改後
        const longitude = places[i].lon; //修改後

        // add place icon 
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', places[i].name);      //修改後
        icon.setAttribute('building', places[i].building);
        icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/bench.png');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale','10, 10');

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
                label.innerHTML = "商店 : "+name+"<br/>"+"建築 : "+building+"<br/>";
                container.appendChild(label);
                document.body.appendChild(container);

                setTimeout(() => {
                    container.parentElement.removeChild(container);
                }, 3000);
            }
        });

        const title = document.createElement('a-text');
        title.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        title.setAttribute('value', places[i].name);
        title.setAttribute('scale', '20 20 20');
        title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
    
    
        scene.appendChild(icon);
        scene.appendChild(title);
    }

}


document.addEventListener('DOMContentLoaded', () => {  //OSM leaflet的東東

    const zoo = [22.998593072090404, 120.2197879523883]; // 預設中心點為台北市動物園
  
    // 建立地圖
    const map = L.map('map', {
      attributionControl: false, // 是否秀出 leaflet
      zoomControl: false , // 是否秀出 - + 按鈕
      zoom: 17, // 0-18
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
  
  
    // 建立 marker
    const customIcon = L.icon({
      iconUrl: 'https://letswritetw.github.io/letswrite-leaflet-osm-locate/dist/dot.svg',
      iconSize: [16, 16],
    });
    const marker = L.marker(zoo, {
      icon: customIcon,
      title: '跟 <a> 的 title 一樣', // 跟 <a> 的 title 一樣
      opacity: 1.0
    }).addTo(map);
  
  
  
    // 跟使用者要位置
    // 參考文件：https://leafletjs.com/examples/mobile/、https://leafletjs.com/reference-1.7.1.html#map-locate
    map.locate({ setView: true, watch: true, maxZoom: 18, enableHighAccuracy: true });
  
    // 使用者不提供位置
    function errorHandler(e) {
      console.log("e", e);
      window.alert('無法判斷您的所在位置，無法使用此功能。預設地點將為 測量系館');
      map.setView(zoo, 18); // 中心移到動物園
      moveTo(map); // 移動到指定座標（平滑 || 縮放 效果）
      panBy(map); // 移動 x, y 位置
    }
    map.on('locationerror', errorHandler);
  
    // 使用者提供位置
    function foundHandler(e) {
      console.log("e", e);
      marker.setLatLng(e.latlng); // 移動 marker
      map.setView(e.latlng, 17);
      moveTo(map); // 移動到指定座標（平滑 || 縮放 效果）
      panBy(map); // 移動 x, y 位置
    }
    map.on('locationfound', foundHandler);
  
  
  
    // 移動到指定座標（平滑 || 縮放 效果）
    function moveTo(map) {
      const btnPanto = document.querySelectorAll('.js-panto');
      Array.prototype.forEach.call(btnPanto, pan => {
        pan.addEventListener('click', e => {
          e.preventDefault();
          let latLng = e.target.dataset.to.split(',');
          let name = e.target.textContent;
          let toggleFly = document.getElementById('flyTo').checked;
          const popup = L.popup();
          popup
            .setLatLng(latLng)
            .setContent(`${name}`)
            .openOn(map);
          toggleFly ? map.flyTo(latLng) : map.panTo(latLng);
        })
      })
    }
  
    // 移動 x, y 位置
    function panBy(map) {
      const btnPanby = document.querySelectorAll('.js-panby');
      Array.prototype.forEach.call(btnPanby, pan => {
        pan.addEventListener('click', e => {
          e.preventDefault();
          let times = e.target.dataset.times;
          let point = 50 * times;
          let points = [point, point];
          map.panBy(points);
        })
      })
    }
  
  })
