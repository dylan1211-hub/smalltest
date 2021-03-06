/*document.addEventListener('DOMContentLoaded', () => {

    let center = [22.998593072090404, 120.2197879523883]; // 預設中心點為測量系館

 // 跟使用者要位置
 function successGPS(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    center = [lat, lng];
    triggerLeaflet()
  };
  function errorGPS() {
    window.alert('無法判斷您的所在位置，無法使用此功能。預設地點將為測量系館');
    triggerLeaflet()
  }
  
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successGPS, errorGPS);
  } else {
    window.alert('您的裝置不具備GPS，無法使用此功能');
    triggerLeaflet()
  }

  function triggerLeaflet() {

  const map = L.map('map', {
    center: center, // 中心點座標
    zoom: 17, // 0 - 18
    attributionControl:false, // 是否秀出「leaflet」的貢獻標記
    zoomControl: false , // 是否秀出 - + 按鈕
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  }

})*/
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