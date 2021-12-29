window.onload = () => {


    var https = require("https");
    var url = "https://cab7-2001-b011-e004-1055-16a-7c2c-4b04-c02.ngrok.io/smalltest"; //抓pull的資料
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

   var https1 = require("https");

    var url1 = "https://cab7-2001-b011-e004-1055-16a-7c2c-4b04-c02.ngrok.io/pdata"; //抓push的資料

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

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');


    if(places.length<=3)
    {
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
    
    if(3<places.length<=6)
    {
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
    
    if(places.length>6)
    {
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
            scene.appendChild(title);
        }
    
        for(let i=3;i<=5;i++){
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

        for(let i=6;i<places.length;i++){
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

function getSelectedCheckboxValues(name) {  //checkbox的函式
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}


const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => { //check中btn的函式
alert(getSelectedCheckboxValues('color'));
});

