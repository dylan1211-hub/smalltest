var places=[];
window.onload = () => {


  var https = require("https");
  var url = "https://3033-2001-b011-e004-1055-21de-777d-3961-104d.ngrok.io/smalltest"; //抓pull的資料
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
      places = data;

     
    });
 
   });

   var https1 = require("https");
   var url1 = "https://3033-2001-b011-e004-1055-21de-777d-3961-104d.ngrok.io/pdata"; //抓push的資料
   var data1 = "";
   https1.get(url1, function (response1) 
   {
    
    console.log("start");
    response1.on("data", chunk => {
    console.log("on data");
    data1 += chunk;
   });

    response1.on("end", () => 
    {
     data1 = JSON.parse(data1);
     let places1 = data1;
     renderPlaces1(places1)
     
    });
 
   });
   
};


function getSelectedCheckboxValues(name) {  //checkbox的函式
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

let g = document.querySelector("#gold");
let s = document.querySelector("#silver");
let c = document.querySelector("#copper");


const btn = document.querySelector('#btn');
  btn.addEventListener('click', (event) => { //check中btn的函式
  alert("您選擇了"+getSelectedCheckboxValues('color')+"\n"+g.checked+"\n"+s.checked+"\n"+c.checked);
  document.getElementById("gold").checked=g.checked;
  document.getElementById("silver").checked=s.checked;
  document.getElementById("copper").checked=c.checked;
  renderPlaces(places)
});

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    if(places.length<=3)
    {
      if(g.checked==true){
        for(let i = 0;i<=2;i++){
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
            icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/g.png');
    
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
            title.setAttribute('value',places[i].building);
            title.setAttribute('scale','10 10');
            title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
        
            scene.appendChild(icon);
        }
      }
      else{
        scene.removeChild(icon);
      }
    }
    
    if(3<places.length&&places.length<=6)
    {
        
        
        if(g.checked==true){

          console.log(places.length+"有ㄟ");
         for(let i =0;i<=2;i++){
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
            icon.setAttribute('trek2there', places[i].trek2there);      //修改後
            //icon.setAttribute('building', place.building);   //修改後
            icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/g.png');
    
            // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
            icon.setAttribute('scale','10, 10');
    
            icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
    
            
    
            const clickListener = function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
    
                const name = ev.target.getAttribute('name');
                const building = ev.target.getAttribute('building');
                const item = ev.target.getAttribute('item');
                const sales = ev.target.getAttribute('sales');
                const website = ev.target.getAttribute('website');
                const websitel = linkify(website);
                const trek2there = ev.target.getAttribute('trek2there');
                const trek2therel=linkify1(trek2there);
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
            };
    
            icon.addEventListener('click', clickListener);
            const title = document.createElement('a-text');
            title.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
            title.setAttribute('value',places[i].building);
            title.setAttribute('scale','10 10');
            title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
        
            scene.appendChild(icon);
          }
        }     
    
        if(s.checked==true){
         for(let i =3;i<=6;i++){
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
            icon.setAttribute('trek2there', places[i].trek2there);     //修改後
            //icon.setAttribute('building', place.building);   //修改後
            icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/s.png');
    
            // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
            icon.setAttribute('scale','8, 8');
    
            icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
    
            
    
            const clickListener = function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
    
                const name = ev.target.getAttribute('name');
                const building = ev.target.getAttribute('building');
                const item = ev.target.getAttribute('item');
                const sales = ev.target.getAttribute('sales');
                const website = ev.target.getAttribute('website');
                const websitel = linkify(website);
                const trek2there = ev.target.getAttribute('trek2there');
                const trek2therel=linkify1(trek2there);
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
            };
    
            icon.addEventListener('click', clickListener);
        
            scene.appendChild(icon);
          }
        }
    }
    
    if(places.length>6)
    {
      const icong = document.createElement('a-image');
        if(g.checked==true){
          console.log(places.length+"༼ つ ◕_◕ ༽つ");
         for(let i =0;i<=2;i++){
            const latitude = places[i].lat;  //修改後
            const longitude = places[i].lon; //修改後

            // add place icon 
            
            
            icong.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
            //icon.setAttribute('name', place.name);         修改前
            icong.setAttribute('name', places[i].name);      //修改後
            icong.setAttribute('building', places[i].building);
            icong.setAttribute('item', places[i].item);
            icong.setAttribute('sales', places[i].sales);
            icong.setAttribute('website', places[i].website);
            icong.setAttribute('trek2there', places[i].trek2there);      //修改後
            //icon.setAttribute('building', place.building);   //修改後
            icong.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/g.png');
    
            // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
            icong.setAttribute('scale','10, 10');
    
            icong.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
    
            
    
            const clickListener = function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
    
                const name = ev.target.getAttribute('name');
                const building = ev.target.getAttribute('building');
                const item = ev.target.getAttribute('item');
                const sales = ev.target.getAttribute('sales');
                const website = ev.target.getAttribute('website');
                const websitel = linkify(website);
                const trek2there = ev.target.getAttribute('trek2there');
                const trek2therel=linkify1(trek2there);
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
            };
    
            icong.addEventListener('click', clickListener);

            const title = document.createElement('a-text');
            title.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
            title.setAttribute('value',places[i].building);
            title.setAttribute('scale','10 10');
            title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
        
            scene.appendChild(icong);
            scene.appendChild(title);
          }
        }
        else{
          scene.removeChild(icong);
        }
        const icons = document.createElement('a-image');
        if(s.checked==true){   
          console.log("哈哈");
         for(let i=3;i<=5;i++){
            const latitude = places[i].lat;  //修改後
            const longitude = places[i].lon; //修改後
    
            // add place icon 
            icons.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
            //icon.setAttribute('name', place.name);         修改前
            icons.setAttribute('name', places[i].name);      //修改後
            icons.setAttribute('building', places[i].building);
            icons.setAttribute('item', places[i].item);
            icons.setAttribute('sales', places[i].sales);
            icons.setAttribute('website', places[i].website);
            icons.setAttribute('trek2there', places[i].trek2there);      //修改後
            //icon.setAttribute('building', place.building);   //修改後
            icons.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/s.png');
    
            // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
            icons.setAttribute('scale','8, 8');
    
            icons.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
    
        
            const clickListener = function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
    
                const name = ev.target.getAttribute('name');
                const building = ev.target.getAttribute('building');
                const item = ev.target.getAttribute('item');
                const sales = ev.target.getAttribute('sales');
                const website = ev.target.getAttribute('website');
                const websitel = linkify(website);
                const trek2there = ev.target.getAttribute('trek2there');
                const trek2therel=linkify1(trek2there);
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
            };
    
            icons.addEventListener('click', clickListener);
        
            scene.appendChild(icons);
          } 
        }
        else{
          scene.removeChild(icons);
        }
        const iconc = document.createElement('a-image');
        if(c.checked==true){
          console.log("彤彤");
         for(let i=6;i<places.length;i++){
            const latitude = places[i].lat;  //修改後
            const longitude = places[i].lon; //修改後
    
            // add place icon 
            iconc.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
            //icon.setAttribute('name', place.name);         修改前
            iconc.setAttribute('name', places[i].name);      //修改後
            iconc.setAttribute('building', places[i].building);
            iconc.setAttribute('item', places[i].item);
            iconc.setAttribute('sales', places[i].sales);
            iconc.setAttribute('website', places[i].website);
            iconc.setAttribute('trek2there', places[i].trek2there);      //修改後
            //icon.setAttribute('building', place.building);   //修改後
            iconc.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/c.png');
    
            // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
            iconc.setAttribute('scale','5, 5');
    
            iconc.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
    
            
    
            const clickListener = function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
    
                const name = ev.target.getAttribute('name');
                const building = ev.target.getAttribute('building');
                const item = ev.target.getAttribute('item');
                const sales = ev.target.getAttribute('sales');
                const website = ev.target.getAttribute('website');
                const websitel = linkify(website);
                const trek2there = ev.target.getAttribute('trek2there');
                const trek2therel=linkify1(trek2there);
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
            };
    
            iconc.addEventListener('click', clickListener);
        
            scene.appendChild(iconc);
          } 
        }
        else{
          scene.removeChild(iconc);
        }
    }

}

//push part

function renderPlaces1(places1) {
    let scene = document.querySelector('a-scene');

    for(let i = 0 ; i<=5;i++){
        const latitude = places1[i].lat;  //修改後
        const longitude = places1[i].lon; //修改後

        // add place icon 
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        //icon.setAttribute('name', place.name);         修改前
        icon.setAttribute('name', places1[i].name);      //修改後
        icon.setAttribute('building', places1[i].building);
        icon.setAttribute('item', places1[i].item);
        icon.setAttribute('sales', places1[i].sales);
        icon.setAttribute('website', places1[i].website);
        icon.setAttribute('trek2there', places1[i].trek2there);      //修改後
        icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/r.png');

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
            const trek2therel=linkify1(trek2there);
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
    
        scene.appendChild(icon);
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

document.addEventListener('DOMContentLoaded', () => {  

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
      window.alert('無法判斷您的所在位置，無法使用此功能。預設地點將為 台北市動物園');
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

