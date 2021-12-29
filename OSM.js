document.addEventListener('DOMContentLoaded', () => {

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
    attributionControl: true, // 是否秀出「leaflet」的貢獻標記
    zoomControl: true , // 是否秀出 - + 按鈕
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  }
  })