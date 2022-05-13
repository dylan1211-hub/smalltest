window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
        type:"restaurant",
        name: 'FRIDAYS',
        lat: 22.9988,
        lon: 120.2187,
        building:"New garden",
        item:"Hamburger",
        sales:"25",
        hit:null,
        website:"http://www.dream-mall.com.tw/Brand/Details/f0d11f97-6644-4cda-bca6-7363942494a3",
        trek2there:"arcgis-trek2there://?stop=22.99880209,120.2186752",
       },
       {
        type:"restaurant",
        name: 'MOVENPICK CAF?',
        lat: 22.99746,
        lon: 120.2186,
        building:"Earth Science",
        item:"coffee",
        sales:"20",
        hit:null,
        website:"http://www.dream-mall.com.tw/Brand/Details/1653d861-5387-4a6c-94eb-e1b6a824bd1c",
        trek2there:"arcgis-trek2there://?stop=22.99745881,120.2186235",
    },
    {
        type:"restaurant",
        name: 'Woosa',
        lat: 22.99699,
        lon: 120.2188,
        building:"Physical 2 Building",
        item:"spaghetti",
        sales:"10",
        hit:null,
        website:"http://www.dream-mall.com.tw/Brand/Details/b508176f-ce47-4937-9677-40491478fa47",
        trek2there:"arcgis-trek2there://?stop=22.99698921,120.2187656",
    },
    {
        type:"drink and snack",
        name: 'HANLIN TEA HOUSE',
        lat: 22.99654269,
        lon: 120.2185315,
        building:"Multi-Purpose Building",
        item:"bubble tea",
        sales:"50",
        hit:"v",
        website:"http://www.dream-mall.com.tw/Brand/Details/75caa17f-49f6-425c-b494-9ce0051d22af",
        trek2there:"arcgis-trek2there://?stop=22.99654269,120.2185315",
    },
    {
        type:"drink and snack",
        name: 'STARBUCKS',
        lat: 22.99723556,
        lon: 120.2174944,
        building:"Chung Cheng Gym",
        item:"latte",
        sales:"30",
        hit:null,
        website:"http://www.dream-mall.com.tw/Brand/Details/913b058c-9347-4a13-b4eb-78426469cb9e",
        trek2there:"arcgis-trek2there://?stop=22.99723556,120.2174944",
    },
    {
        type:"drink and snack",
        name: 'COLD STONE',
        lat: 22.99782064,
        lon: 120.2178081,
        building:"College of Managemant",
        item:"chocolate",
        sales:"15",
        hit:null,
        website:"http://www.dream-mall.com.tw/Brand/Details/0dfb8947-8406-4592-a219-4ac909524744",
        trek2there:"arcgis-trek2there://?stop=22.99782064,120.2178081",
    }
   ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    for(let i = 0;i<=5;i++){
        const latitude = places[i].lat;  //修改後
        const longitude = places[i].lon; //修改後

        // add place icon 
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        //icon.setAttribute('name', place.name);         修改前
        icon.setAttribute('name', places[i].name);      //修改後
        icon.setAttribute('building', places[i].building);
        icon.setAttribute('item', places[i].item);
        icon.setAttribute('sales', places[i].sales);
        icon.setAttribute('website', places[i].website);
        icon.setAttribute('trek2there', places[i].trek2there);
        icon.setAttribute('src','https://github.com/dylan1211-hub/smalltest/bus_test/assets/b.gltf');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale','10, 10');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        //const touchListener = ;

        icon.addEventListener('click', function () {
            ev.stopPropagation();
            ev.preventDefault();

            const name = ev.target.getAttribute('name');
            const building = ev.target.getAttribute('building');
            const item = ev.target.getAttribute('item');
            const sales = ev.target.getAttribute('sales');
            const website = ev.target.getAttribute('website');
            const websitel = linkify(website);
            const trek2there = ev.target.getAttribute('trek2there');
            const trek2therel=linkify1(trek2there); //轉換為連結

            const el = ev.detail.intersection && ev.detail.intersection.object.el;

            if (el && el === ev.target) {

                const label = document.createElement('span');
                const container = document.createElement('div');
                container.setAttribute('id', 'place-label');
                label.innerHTML = "商店 : "+name+"<br/>"+"建築 : "+building+"<br/>"+"商品 : "+item+"<br/>"+"折扣 : "+
                sales+" %off"+"<br/>"+"網站 : "+websitel+"<br/>"+"導航 : "+trek2therel;
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

function linkify(inputText) {  //轉換https網址的函式
    var replacedText               
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
    return replacedText;
}

function linkify1(inputText) {  //轉換trek2there網址的函式
    var replacedText
    replacePattern1 = /(\b(arcgis-trek2there):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
    return replacedText;
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
