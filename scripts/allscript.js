var placesr=[];
var placesr1=[];
var placesr2=[];
window.onload = () => {


  var https = require("https");
  var url = "https://54ce-2001-b400-e78a-d53d-a489-4a87-6ddc-f555.ngrok.io/pulldata"; //抓pull的資料
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
      placesr = data;

  
    });
 
   });

   var https1 = require("https");
   var url1 = "https://54ce-2001-b400-e78a-d53d-a489-4a87-6ddc-f555.ngrok.io/pdata"; //抓push的資料
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
     placesr1 = data1;
    });
 
   });

   var https2 = require("https");
   var url2 = "https://54ce-2001-b400-e78a-d53d-a489-4a87-6ddc-f555.ngrok.io/wdata"; //抓whole的資料
   var data2 = "";
   https2.get(url2, function (response2) 
   {
    
    console.log("start");
    response2.on("data", chunk => {
    console.log("on data");
    data2 += chunk;
   });

    response2.on("end", () => 
    {
     data2 = JSON.parse(data2);
     placesr2 = data2;
    });
 
   });

  
  st = new Date().getHours;
  sm = new Date().getMinutes;
  ss = new Date().getSeconds;
  current_time();
  navigator.geolocation.getCurrentPosition(area);
};


//智慧提示_距離的東東
function area(position)
{
  clat = position.coords.latitude;
  clon = position.coords.longitude;
  var area="";
  if(22.99627<=clat&&clat<22.99739&&120.21888<=clon&&clon<120.22189)
  {area="A"};
  if(22.99774<=clat&&clat<22.99957&&120.21900<=clon&&clon<120.22206)
  {area="B"};
  if(22.99967<=clat&&clat<23.00059&&120.21905<=clon&&clon<120.22215)
  {area="C"};
  if(22.99629<=clat&&clat<22.99773&&120.21823<=clon&&clon<120.22027)
  {area="D"};
  if(22.99774<=clat&&clat<22.99920&&120.21826<=clon&&clon<120.22039)
  {area="E"};
  if(22.99947<=clat&&clat<23.00070&&120.21842<=clon&&clon<120.22052)
  {area="F"};
  if(22.99672<=clat&&clat<22.99917&&120.21487<=clon&&clon<120.21833)
  {area="G"};
  if(22.99945<=clat&&clat<23.00081&&120.21664<=clon&&clon<120.21847)
  {area="H"};
  if(22.99987<=clat&&clat<23.00098&&120.21437<=clon&&clon<120.21689)
  {area="I"};
  if(22.99867<=clat&&clat<22.99976&&120.21407<=clon&&clon<120.21535)
  {area="J"};

  var places=[];
  var places1=[];
  var places2=[];

  for (var i = 0; i < placesr.length; i++) {
    if (placesr[i].area == area) 
    {
      places.push(placesr[i]);
    }
  }
  for (var i = 0; i < placesr1.length; i++) {
    if (placesr1[i].area == area) 
    {
      places1.push(placesr1[i]);
    }
  }
  for (var i = 0; i < placesr2.length; i++) {
    if (placesr2[i].area == area) 
    {
      places2.push(placesr2[i]);
    }
  }
  //印出該區的商店
  //var stores = document.createElement("span");
  var store = document.createElement("div");
  store.setAttribute('id', 'store');
  var str="";
  for(var i =0;i<placesr.length;i++)
  {
    str+="🔷"+placesr[i].name+"<br/>";
  }
  store.innerHTML=str;
  //store.appendChild(stores);
  document.body.appendChild(store);

  //setTimeout('area(position)',60000);
  //area(position);
}

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
let r = document.querySelector("#red");
let w = document.querySelector("#white");



const btn = document.querySelector('#btn');
  btn.addEventListener('click', (event) => { //check中btn的函式
  //alert("您選擇了"+getSelectedCheckboxValues('color')+"\n"+g.checked+"\n"+s.checked+"\n"+c.checked);
  document.getElementById("gold").checked=g.checked;
  document.getElementById("silver").checked=s.checked;
  document.getElementById("copper").checked=c.checked;
  //document.getElementById("red").checked=r.checked;
  //document.getElementById("white").checked=w.checked;
  renderPlaces(placesr)
  renderPlaces1(placesr1)
  renderPlaces2(placesr2)
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
            icon.setAttribute('id', "g");
            icon.setAttribute('name', places[i].name);      //修改後
            icon.setAttribute('building', places[i].building);
            icon.setAttribute('item', places[i].item);
            icon.setAttribute('sales', places[i].sales);
            icon.setAttribute('recommand', places[i].recommand);
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
                const recommand = ev.target.getAttribute('recommand');
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
                    sales+" %off"+"<br/>"+"推薦原因 : "+recommand+"<br/>"+"網站 : "+websitel+"<br/>"+"導航 : "+trek2therel;
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
      else{
        console.log("掰掰1");
        let removeItems = document.getElementById('g')
        for(let i=0;i<removeItems.length;i++){
          scene.removeChild(removeItems[i])
        }
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
            icon.setAttribute('id', "g");
            icon.setAttribute('name', places[i].name);      //修改後
            icon.setAttribute('building', places[i].building);
            icon.setAttribute('item', places[i].item);
            icon.setAttribute('sales', places[i].sales);
            icon.setAttribute('recommand', places[i].recommand);
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
                const recommand = ev.target.getAttribute('recommand');
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
                    sales+" %off"+"<br/>"+"推薦原因 : "+recommand+"<br/>"+"網站 : "+websitel+"<br/>"+"導航 : "+trek2therel;
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
            title.setAttribute('value', places[i].name);
            title.setAttribute('scale', '20 20 20');
            title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
        
            scene.appendChild(icon);
            scene.appendChild(title);
          }
        }
        else{
          console.log("掰掰1");
          let removeItems = document.getElementById('g')
          for(let i=0;i<removeItems.length;i++){
            scene.removeChild(removeItems[i])
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
            icon.setAttribute('id', "s");
            icon.setAttribute('name', places[i].name);      //修改後
            icon.setAttribute('building', places[i].building);
            icon.setAttribute('item', places[i].item);
            icon.setAttribute('sales', places[i].sales);
            icon.setAttribute('recommand', places[i].recommand);
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
                const recommand = ev.target.getAttribute('recommand');
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
                    sales+" %off"+"<br/>"+"推薦原因 : "+recommand+"<br/>"+"網站 : "+websitel+"<br/>"+"導航 : "+trek2therel;
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
            title.setAttribute('value', places[i].name);
            title.setAttribute('scale', '18 18 18');
            title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

            scene.appendChild(icon);
            scene.appendChild(title);
          }
        }
        else{
          console.log("掰掰2");
          let removeItems = document.getElementById('s')
          for(let i=0;i<removeItems.length;i++){
            scene.removeChild(removeItems[i])
          }
          
        }
    }
    
    if(places.length>6)
    {
      
        if(g.checked==true){
          console.log(places.length+"༼ つ ◕_◕ ༽つ");
         for(let i =0;i<=2;i++){
            const latitude = places[i].lat;  //修改後
            const longitude = places[i].lon; //修改後

            // add place icon 
            const icon = document.createElement('a-image');
            icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
            //icon.setAttribute('name', place.name);         修改前
            icon.setAttribute('id', "g"); 
            icon.setAttribute('name', places[i].name);      //修改後
            icon.setAttribute('building', places[i].building);
            icon.setAttribute('item', places[i].item);
            icon.setAttribute('sales', places[i].sales);
            icon.setAttribute('recommand', places[i].recommand);
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
                const recommand = ev.target.getAttribute('recommand');
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
                    sales+" %off"+"<br/>"+"推薦原因 : "+recommand+"<br/>"+"網站 : "+websitel+"<br/>"+"導航 : "+trek2therel;
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
            title.setAttribute('value', places[i].name);
            title.setAttribute('scale', '20 20 20');
            title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
        
            scene.appendChild(icon);
            scene.appendChild(title);
          }
        }
        else{
          console.log("掰掰1");
          let removeItems = document.getElementById('g')
          for(let i=0;i<removeItems.length;i++){
            scene.removeChild(removeItems[i])
          }
          
        }

        if(s.checked==true){   

          console.log("哈哈");
         for(let i=3;i<=5;i++){
            const latitude = places[i].lat;  //修改後
            const longitude = places[i].lon; //修改後

            const icon = document.createElement('a-image');
            // add place icon 
            icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
            //icon.setAttribute('name', place.name);         修改前
            icon.setAttribute('id', "s");
            icon.setAttribute('name', places[i].name);      //修改後
            icon.setAttribute('building', places[i].building);
            icon.setAttribute('item', places[i].item);
            icon.setAttribute('sales', places[i].sales);
            icon.setAttribute('recommand', places[i].recommand);
            icon.setAttribute('website', places[i].website);
            icon.setAttribute('trek2there', places[i].trek2there);      //修改後
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
                const recommand = ev.target.getAttribute('recommand');
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
                    sales+" %off"+"<br/>"+"推薦原因 : "+recommand+"<br/>"+"網站 : "+websitel+"<br/>"+"導航 : "+trek2therel;
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
            title.setAttribute('value', places[i].name);
            title.setAttribute('scale', '18 18 18');
            title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
        
            scene.appendChild(icon);
            scene.appendChild(title);
          } 
        }
        else{
          console.log("掰掰2");
          let removeItems = document.getElementById('s')
          for(let i=0;i<removeItems.length;i++){
            scene.removeChild(removeItems[i])
          }
          
        }

        if(c.checked==true){
          console.log("彤彤");
         for(let i=6;i<places.length;i++){
            const latitude = places[i].lat;  //修改後
            const longitude = places[i].lon; //修改後

            const icon = document.createElement('a-image');
            // add place icon 
            icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
            //icon.setAttribute('name', place.name);         修改前
            icon.setAttribute('id', "c");
            icon.setAttribute('name', places[i].name);      //修改後
            icon.setAttribute('building', places[i].building);
            icon.setAttribute('item', places[i].item);
            icon.setAttribute('sales', places[i].sales);
            icon.setAttribute('recommand', places[i].recommand);
            icon.setAttribute('website', places[i].website);
            icon.setAttribute('trek2there', places[i].trek2there);      //修改後
            //icon.setAttribute('building', place.building);   //修改後
            icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/c.png');
    
            // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
            icon.setAttribute('scale','5, 5');
    
            icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
    
            
    
            const clickListener = function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
    
                const name = ev.target.getAttribute('name');
                const building = ev.target.getAttribute('building');
                const item = ev.target.getAttribute('item');
                const sales = ev.target.getAttribute('sales');
                const recommand = ev.target.getAttribute('recommand');
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
                    sales+" %off"+"<br/>"+"推薦原因 : "+recommand+"<br/>"+"網站 : "+websitel+"<br/>"+"導航 : "+trek2therel;
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
            title.setAttribute('value', places[i].name);
            title.setAttribute('scale', '15 15 15');
            title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
        
            scene.appendChild(icon);
            scene.appendChild(title);
          } 
        }
        else{
          console.log("掰掰3");
          let removeItems = document.getElementById('c')
          for(let i=0;i<removeItems.length;i++){
            scene.removeChild(removeItems[i])
          }
          
        }
    }

}

//push part

function renderPlaces1(places1) {
    let scene = document.querySelector('a-scene');
    //if(r.checked==true){
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
        icon.setAttribute('recommand', places1[i].recommand);
        icon.setAttribute('website', places1[i].website);
        icon.setAttribute('trek2there', places1[i].trek2there);      //修改後
        icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/r.png');

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
          const recommand = ev.target.getAttribute('recommand');
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
                    sales+" %off"+"<br/>"+"推薦原因 : "+recommand+"<br/>"+"網站 : "+websitel+"<br/>"+"導航 : "+trek2therel;
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
        title.setAttribute('value', places1[i].name);
        title.setAttribute('scale', '20 20 20');
        title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        scene.appendChild(icon);
        scene.appendChild(title);
    }
  //}
}

//all data

function renderPlaces2(places2) {
  let scene = document.querySelector('a-scene');

  //if(w.checked==true){
   for(let i = 0 ; i<places2.length;i++){
      const latitude = places2[i].lat;  //修改後
      const longitude = places2[i].lon; //修改後

      // add place icon 
      const icon = document.createElement('a-image');
      icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
      //icon.setAttribute('name', place.name);         修改前
      icon.setAttribute('name', places2[i].name);      //修改後
      icon.setAttribute('building', placee2[i].building);
      icon.setAttribute('item', places2[i].item);
      icon.setAttribute('sales', places2[i].sales);
      icon.setAttribute('recommand', places2[i].recommand);
      icon.setAttribute('website', places2[i].website);
      icon.setAttribute('trek2there', places2[i].trek2there);      //修改後
      icon.setAttribute('src','https://dylan1211-hub.github.io/smalltest/assets/w.png');

      // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
      icon.setAttribute('scale','5, 5');

      icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

      const clickListener = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const name = ev.target.getAttribute('name');
        const building = ev.target.getAttribute('building');
        const item = ev.target.getAttribute('item');
        const sales = ev.target.getAttribute('sales');
        const recommand = ev.target.getAttribute('recommand');
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
                    sales+" %off"+"<br/>"+"推薦原因 : "+recommand+"<br/>"+"網站 : "+websitel+"<br/>"+"導航 : "+trek2therel;
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
      title.setAttribute('value', places2[i].name);
      title.setAttribute('scale', '15 15 15');
      title.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

      scene.appendChild(icon);
      scene.appendChild(title);
   }
 //}
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

   var stores = [
    {
      "type": "FeatureCollection",
      "features": [
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2199745,22.99865464 ]
       },
       "properties": {
       "type":"3C",
       "building":"Geomatics",
       "name":"STUDIO A",
       "item":"iphone13 pro",
       "sales":30,
       "hit":"v",
       "blockID":"B",
       "website":"http://www.dream-mall.com.tw/Brand/Details/fd7ab177-3820-451a-b827-aee19092e61c",
       "trek2there":"arcgis-trek2there://?stop=22.99865464,120.2199745"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2194411,22.99865464 ]
       },
       "properties": {
       "type":"3C",
       "building":"Mathmatics",
       "name":"SONY",
       "item":"Xperia 1 III",
       "sales":20,
       "hit":"",
       "blockID":"B",
       "website":"http://www.dream-mall.com.tw/Brand/Details/e9382ee6-6211-4a08-b632-efebd4d38a7f",
       "trek2there":"arcgis-trek2there://?stop=22.99865464,120.2194411"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2197066,22.99835242 ]
       },
       "properties": {
       "type":"3C",
       "building":"Chemistry",
       "name":"Samsung",
       "item":"Galaxy S21",
       "sales":10,
       "hit":"",
       "blockID":"B",
       "website":"http://www.dream-mall.com.tw/Brand/Details/a8b03cb5-1347-4aee-8c94-f06d1aef3065",
       "trek2there":"arcgis-trek2there://?stop=22.99835242,120.2197066"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2205475,22.99861667 ]
       },
       "properties": {
       "type":"famous products",
       "building":"Materials",
       "name":"PIQUADRO",
       "item":"Gucci Horsebit 1955 shoulder bag",
       "sales":25,
       "hit":"",
       "blockID":"B",
       "website":"http://www.dream-mall.com.tw/Brand/Details/e562f782-2941-4fc5-a140-90c07c412b2e",
       "trek2there":"arcgis-trek2there://?stop=22.99861667,120.2205475"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2198134,22.99964668 ]
       },
       "properties": {
       "type":"famous products",
       "building":"Library",
       "name":"COACH",
       "item":"MADISON  SIGNATURE",
       "sales":20,
       "hit":"v",
       "blockID":"C",
       "website":"http://www.dream-mall.com.tw/Brand/Details/51b711d5-d9c0-46ed-8a13-70d77d4c3d31",
       "trek2there":"arcgis-trek2there://?stop=22.99964668,120.2198134"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2184491,22.99823264 ]
       },
       "properties": {
       "type":"famous products",
       "building":"CNC",
       "name":"SWAROVSKI",
       "item":"Prada Cleo sequined bag",
       "sales":10,
       "hit":"",
       "blockID":"E",
       "website":"http://www.dream-mall.com.tw/Brand/Details/8c7c7249-523b-42dd-a273-3747be9b5742",
       "trek2there":"arcgis-trek2there://?stop=22.99823264,120.2184491"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2206703,22.99940221 ]
       },
       "properties": {
       "type":"women's fashions",
       "building":"Department of Civil Engineering",
       "name":"LADY",
       "item":"jeans",
       "sales":25,
       "hit":"",
       "blockID":"B",
       "website":"http://www.dream-mall.com.tw/Brand/Details/2e49f167-5cac-4b82-b5f9-80d6b0952c5a",
       "trek2there":"arcgis-trek2there://?stop=22.99940221,120.2206703"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2207427,23.00057895 ]
       },
       "properties": {
       "type":"women's fashions",
       "building":"Hydraulies & Ocean Eng. Dept.",
       "name":"Fantasy",
       "item":"hang bag",
       "sales":10,
       "hit":"",
       "blockID":"C",
       "website":"http://www.dream-mall.com.tw/Brand/Details/a4c5ee45-4f40-42d6-bad2-8fd82fe9e52f",
       "trek2there":"arcgis-trek2there://?stop=23.00057895,120.2207427"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2207186,23.0001349 ]
       },
       "properties": {
       "type":"women's fashions",
       "building":"Environmental",
       "name":"POLY LULU",
       "item":"jeans",
       "sales":10,
       "hit":"",
       "blockID":"C",
       "website":"http://www.dream-mall.com.tw/Brand/Details/c000c0e7-af06-43eb-8d83-81e5282a0761",
       "trek2there":"arcgis-trek2there://?stop=23.0001349,120.2207186"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2205533,22.99792822 ]
       },
       "properties": {
       "type":"men's fashions",
       "building":"Resource",
       "name":"Lif8",
       "item":"T-shirt",
       "sales":50,
       "hit":"v",
       "blockID":"B",
       "website":"http://www.dream-mall.com.tw/Brand/Details/8992232f-46f7-4e44-a7fc-16baa1baf7dc",
       "trek2there":"arcgis-trek2there://?stop=22.99792822,120.2205533"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2206943,22.99748021 ]
       },
       "properties": {
       "type":"men's fashions",
       "building":"Computer  Information",
       "name":"GAP",
       "item":"T-shirt",
       "sales":10,
       "hit":"",
       "blockID":"A",
       "website":"http://www.dream-mall.com.tw/Brand/Details/ea9a11f2-22a3-49c4-b2f3-00ec6aec4f03",
       "trek2there":"arcgis-trek2there://?stop=22.99748021,120.2206943"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2216173,22.99657241 ]
       },
       "properties": {
       "type":"men's fashions",
       "building":"Science",
       "name":"BIG TRAIN",
       "item":"jacket",
       "sales":10,
       "hit":"",
       "blockID":"A",
       "website":"http://www.dream-mall.com.tw/Brand/Details/2cf39184-609d-4e55-815e-6f0dfbf4e7e2",
       "trek2there":"arcgis-trek2there://?stop=22.99657241,120.2216173"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2195844,22.99668903 ]
       },
       "properties": {
       "type":"kid's fashions",
       "building":"Museum",
       "name":"Anny",
       "item":"hat",
       "sales":50,
       "hit":"",
       "blockID":"A",
       "website":"http://www.dream-mall.com.tw/Brand/Details/a12e86a7-d3ea-4250-9349-332eded300b5",
       "trek2there":"arcgis-trek2there://?stop=22.99668903,120.2195844"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2196467,22.99711106 ]
       },
       "properties": {
       "type":"kid's fashions",
       "building":"Ge-Chi Hall",
       "name":"chicco",
       "item":"hat",
       "sales":15,
       "hit":"",
       "blockID":"A",
       "website":"http://www.dream-mall.com.tw/Brand/Details/8a0825d7-cfcd-4416-8095-8761cc286a70",
       "trek2there":"arcgis-trek2there://?stop=22.99711106,120.2196467"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2197111,22.99733319 ]
       },
       "properties": {
       "type":"kid's fashions",
       "building":"Physical  Dept.",
       "name":"les enphants",
       "item":"pants",
       "sales":10,
       "hit":"",
       "blockID":"A",
       "website":"http://www.dream-mall.com.tw/Brand/Details/1615acb1-e662-4c24-bf16-d2870f7de57a",
       "trek2there":"arcgis-trek2there://?stop=22.99733319,120.2197111"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2186752,22.99880209 ]
       },
       "properties": {
       "type":"restaurants",
       "building":"New garden",
       "name":"FRIDAYS",
       "item":"Hamburger",
       "sales":25,
       "hit":"",
       "blockID":"E",
       "website":"http://www.dream-mall.com.tw/Brand/Details/f0d11f97-6644-4cda-bca6-7363942494a3",
       "trek2there":"arcgis-trek2there://?stop=22.99880209,120.2186752"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2186235,22.99745881 ]
       },
       "properties": {
       "type":"restaurants",
       "building":"Earth Science",
       "name":"MOVENPICK CAF?",
       "item":"coffee",
       "sales":20,
       "hit":"",
       "blockID":"D",
       "website":"http://www.dream-mall.com.tw/Brand/Details/1653d861-5387-4a6c-94eb-e1b6a824bd1c",
       "trek2there":"arcgis-trek2there://?stop=22.99745881,120.2186235"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2187656,22.99698921 ]
       },
       "properties": {
       "type":"restaurants",
       "building":"Physical 2 Building",
       "name":"Woosa",
       "item":"spaghetti",
       "sales":10,
       "hit":"",
       "blockID":"D",
       "website":"http://www.dream-mall.com.tw/Brand/Details/b508176f-ce47-4937-9677-40491478fa47",
       "trek2there":"arcgis-trek2there://?stop=22.99698921,120.2187656"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2185315,22.99654269 ]
       },
       "properties": {
       "type":"drink and snack",
       "building":"Multi-Purpose Building",
       "name":"HANLIN TEA HOUSE",
       "item":"bubble tea",
       "sales":50,
       "hit":"v",
       "blockID":"D",
       "website":"http://www.dream-mall.com.tw/Brand/Details/75caa17f-49f6-425c-b494-9ce0051d22af",
       "trek2there":"arcgis-trek2there://?stop=22.99654269,120.2185315"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2174944,22.99723556 ]
       },
       "properties": {
       "type":"drink and snack",
       "building":"Chung Cheng Gym",
       "name":"STARBUCKS",
       "item":"latte",
       "sales":30,
       "hit":"",
       "blockID":"G",
       "website":"http://www.dream-mall.com.tw/Brand/Details/913b058c-9347-4a13-b4eb-78426469cb9e",
       "trek2there":"arcgis-trek2there://?stop=22.99723556,120.2174944"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2178081,22.99782064 ]
       },
       "properties": {
       "type":"drink and snack",
       "building":"College of Managemant",
       "name":"COLD STONE",
       "item":"chocolate",
       "sales":15,
       "hit":"",
       "blockID":"G",
       "website":"http://www.dream-mall.com.tw/Brand/Details/0dfb8947-8406-4592-a219-4ac909524744",
       "trek2there":"arcgis-trek2there://?stop=22.99782064,120.2178081"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.217111,22.99883904 ]
       },
       "properties": {
       "type":"cosmetics",
       "building":"Yun-Ping Administration Building",
       "name":"LANCOME",
       "item":"perfume",
       "sales":10,
       "hit":"",
       "blockID":"G",
       "website":"http://www.dream-mall.com.tw/Brand/Details/9a01c4b7-9496-453b-a4b7-2fbad8d0ae34",
       "trek2there":"arcgis-trek2there://?stop=22.99883904,120.217111"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2173618,22.99949101 ]
       },
       "properties": {
       "type":"cosmetics",
       "building":"History Dept.",
       "name":"CHANEL",
       "item":"perfume",
       "sales":10,
       "hit":"",
       "blockID":"H",
       "website":"http://www.dream-mall.com.tw/Brand/Details/9569356a-7855-4c71-a924-5dda05e3cb2f",
       "trek2there":"arcgis-trek2there://?stop=22.99949101,120.2173618"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2179883,23.00039002 ]
       },
       "properties": {
       "type":"cosmetics",
       "building":"Chinese Lit. Dept.",
       "name":"Innisfree",
       "item":"Lotion",
       "sales":10,
       "hit":"",
       "blockID":"H",
       "website":"http://www.dream-mall.com.tw/Brand/Details/dc5f5462-e879-4a05-98fa-671b752c23b5",
       "trek2there":"arcgis-trek2there://?stop=23.00039002,120.2179883"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2178457,23.0007989 ]
       },
       "properties": {
       "type":"sporting goods",
       "building":"College of Liberal Arts",
       "name":"adidas",
       "item":"Sneakers",
       "sales":35,
       "hit":"",
       "blockID":"H",
       "website":"http://www.dream-mall.com.tw/Brand/Details/7613765b-4d4c-47ba-8f47-1c8f227f94d3",
       "trek2there":"arcgis-trek2there://?stop=23.0007989,120.2178457"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2159577,22.99976665 ]
       },
       "properties": {
       "type":"sporting goods",
       "building":"Industrail Design Dept.",
       "name":"K-SWISS",
       "item":"Sneakers",
       "sales":10,
       "hit":"",
       "blockID":"I",
       "website":"http://www.dream-mall.com.tw/Brand/Details/f1dbd6fc-78c5-4fe6-84af-fc1c734db1b5",
       "trek2there":"arcgis-trek2there://?stop=22.99976665,120.2159577"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2159613,22.99933523 ]
       },
       "properties": {
       "type":"sporting goods",
       "building":"Wei-Nong Building",
       "name":"NIKE",
       "item":"sports shoes",
       "sales":30,
       "hit":"v",
       "blockID":"G",
       "website":"http://www.dream-mall.com.tw/Brand/Details/a1aa6f3d-3be4-4942-b4f8-50aaf7bcd5b6",
       "trek2there":"arcgis-trek2there://?stop=22.99933523,120.2159613"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2160543,22.99782687 ]
       },
       "properties": {
       "type":"accessories",
       "building":"Art center",
       "name":"PANDORA",
       "item":"necklace",
       "sales":10,
       "hit":"",
       "blockID":"I",
       "website":"http://www.dream-mall.com.tw/Brand/Details/48a825b0-c0e1-4277-b0d9-c0036fb452bc",
       "trek2there":"arcgis-trek2there://?stop=22.99782687,120.2160543"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.214523,22.99901577 ]
       },
       "properties": {
       "type":"accessories",
       "building":"KF Student Dorm 1",
       "name":"ICU",
       "item":"necklace",
       "sales":25,
       "hit":"",
       "blockID":"J",
       "website":"http://www.dream-mall.com.tw/Brand/Details/819598ab-cc22-45a7-87f6-72ff6544d859",
       "trek2there":"arcgis-trek2there://?stop=22.99901577,120.214523"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2149238,22.99944391 ]
       },
       "properties": {
       "type":"accessories",
       "building":"KF Student Dorm 2",
       "name":"DIANA",
       "item":"necklace",
       "sales":10,
       "hit":"",
       "blockID":"J",
       "website":"http://www.dream-mall.com.tw/Brand/Details/4470ad25-22d0-48b3-b3d2-01b4ea081ee5",
       "trek2there":"arcgis-trek2there://?stop=22.99944391,120.2149238"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2149667,23.00030347 ]
       },
       "properties": {
       "type":"toys and games",
       "building":"Air University",
       "name":"FUNBOX",
       "item":"Doll model",
       "sales":10,
       "hit":"",
       "blockID":"I",
       "website":"http://www.dream-mall.com.tw/Brand/Details/066aa00f-b686-4a19-bc58-1f2dd83c67ce",
       "trek2there":"arcgis-trek2there://?stop=23.00030347,120.2149667"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2157753,23.00081722 ]
       },
       "properties": {
       "type":"toys and games",
       "building":"Urban Planning Dept.",
       "name":"TOM'S WORLD",
       "item":"Doll model",
       "sales":10,
       "hit":"",
       "blockID":"I",
       "website":"http://www.dream-mall.com.tw/Brand/Details/0485ad19-9b61-4cc3-8444-9aa522f33723",
       "trek2there":"arcgis-trek2there://?stop=23.00081722,120.2157753"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2227668,22.99779111 ]
       },
       "properties": {
       "type":"toys and games",
       "building":"Chemical Eng. Dept.",
       "name":"GMP Baby",
       "item":"Ragdoll",
       "sales":10,
       "hit":"",
       "blockID":"K",
       "website":"http://www.dream-mall.com.tw/Brand/Details/5f50e7c1-a460-4047-b1cd-092f51e76592",
       "trek2there":"arcgis-trek2there://?stop=22.99779111,120.2227668"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2226552,22.9968186 ]
       },
       "properties": {
       "type":"homeware",
       "building":"Electrical machinery",
       "name":"tokuyo",
       "item":"Featured Massage Chair",
       "sales":35,
       "hit":"",
       "blockID":"K",
       "website":"http://www.dream-mall.com.tw/Brand/Details/d79cb470-d29e-480c-af65-bb92b8e606db",
       "trek2there":"arcgis-trek2there://?stop=22.9968186,120.2226552"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2224171,22.99625016 ]
       },
       "properties": {
       "type":"homeware",
       "building":"Chi Mei Building ",
       "name":"Dyson",
       "item":"Air purifier",
       "sales":10,
       "hit":"",
       "blockID":"K",
       "website":"http://www.dream-mall.com.tw/Brand/Details/f6eab90f-1d89-403b-bddf-14fa52b82cb3",
       "trek2there":"arcgis-trek2there://?stop=22.99625016,120.2224171"
       }
     },
     {
       "type": "Feature",
       "geometry": {
          "type": "Point",
          "coordinates":  [ 120.2184604,22.99495719 ]
       },
       "properties": {
       "type":"homeware",
       "building":"Swimming Pool",
       "name":"MUJI",
       "item":"wine glasses",
       "sales":10,
       "hit":"",
       "blockID":"L",
       "website":"http://www.dream-mall.com.tw/Brand/Details/23e68c04-775d-4825-80a2-95f58ac62e16",
       "trek2there":"arcgis-trek2there://?stop=22.99495719,120.2184604"
       }
     }
   ]
   }
   ]

   var MyIcon = L.icon({
    iconUrl: './assets/r.png',
    iconSize:     [10, 10], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

   L.geoJson(stores,{icon: MyIcon}).addTo(map);

  })


  //智慧提醒_時間的東東 
  function current_time()
  {
    let dt = new Date(); 
    let h = dt.getHours;
    let m = dt.getMinutes;
    let s = dt.getSeconds;
    //setTimeout(current_time(),60000);
    //current_time();

    if(h==12&&m==00&&s==00)
    {
     window.confirm('現在是中午12:00~'+'\n午餐時間到了༼つ◕_◕ ༽つ'+'\n點選「確認」前往園區美食AR導覽!')
     if(confirm('現在是中午12:00~'+'\n午餐時間到了༼つ◕_◕ ༽つ'+'\n點選「確認」前往園區美食AR導覽!')==true)
     {
      window.open('https://dylan1211-hub.github.io/smalltest/eat.html','outlet美食導覽')
     }
    }

    if(h==18&&m==00&&s==00)
    {
      window.confirm('現在是下午18:00~'+'\n晚餐時間到了༼つ◕_◕ ༽つ'+'\n點選「確認」前往園區美食AR導覽!')
      if(confirm('現在是下午18:00~'+'\n晚餐時間到了༼つ◕_◕ ༽つ'+'\n點選「確認」前往園區美食AR導覽!')==true)
      {
       window.open('https://dylan1211-hub.github.io/smalltest/eat.html','outlet美食導覽')
      }
    }

    if((h-st)==3&&(m-sm)==0&&(s-ss)==0)
    {
      window.confirm('您已入園超過3小時了~'+'\n需要飲水、廁所、休息一下嗎༼つ◕_◕ ༽つ'+'\n點選「確認」前往園區休息AR導覽!')
      if(confirm('您已入園超過3小時了~'+'\n需要飲水、廁所、休息一下嗎༼つ◕_◕ ༽つ'+'\n點選「確認」前往園區休息AR導覽!')==true)
      {
       window.open('https://dylan1211-hub.github.io/smalltest/rest.html','outlet休息導覽')
      }
    }

    if((h-st)==6&&(m-sm)==0&&(s-ss)==0)
    {
      window.confirm('您已入園超過6小時了~'+'\n需要飲水、廁所、休息一下嗎༼つ◕_◕ ༽つ'+'\n點選「確認」前往園區休息AR導覽!')
      if(confirm('您已入園超過6小時了~'+'\n需要飲水、廁所、休息一下嗎༼つ◕_◕ ༽つ'+'\n點選「確認」前往園區休息AR導覽!')==true)
      {
       window.open('https://dylan1211-hub.github.io/smalltest/rest.html','outlet休息導覽')
      }
    }
  }

