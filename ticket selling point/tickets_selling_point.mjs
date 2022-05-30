mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWJsZSIsImEiOiJjbDNlZ3B1OGkwYnJ5M2Nucm8yc2FqdmdhIn0.Shv1FcO_OlpCHdFDjOtV6w';
const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [21.7578, 38.2658], // starting position [lng, lat]
    zoom: 12 // starting zoom
});


//πλατεία γεωργίου
const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
mapboxClient.geocoding
    .forwardGeocode({
        query: 'Πλατεία Γεωργίου, Patras, Greece',
        autocomplete: false,
        limit: 1
    })
    .send()
    .then((response) => {
        if (
            !response ||
            !response.body ||
            !response.body.features ||
            !response.body.features.length
        ) {
            console.error('Invalid response:');
            console.error(response);
            return;
    }
    const feature = response.body.features[0];
    let text = "Πλατεία Γεωργίου";
    let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
    .setHTML(text)
    let marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map);
    let markerDiv = marker.getElement();
    markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
    markerDiv.addEventListener('mouseleave', () => marker.togglePopup());


    let places = document.querySelectorAll(".places #a");
    for(let i of places){
        if(i.textContent == text){
            i.addEventListener('mouseenter',()=>{
                marker = new mapboxgl.Marker({color:'black'}).setLngLat(feature.center).setPopup(popup).addTo(map)
            })
            i.addEventListener('mouseleave', ()=>{
                marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map)
                markerDiv = marker.getElement();
                markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
                markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
            })
        }
    }
    });
    

//πρυτανεία
const mapboxClient2 = mapboxSdk({ accessToken: mapboxgl.accessToken });
mapboxClient2.geocoding
    .forwardGeocode({
        query: 'Πανεπιστήμιο Πατρών, Patras, Greece',
        autocomplete: false,
        limit: 1
    })
    .send()
    .then((response) => {
        if (
            !response ||
            !response.body ||
            !response.body.features ||
            !response.body.features.length
        ) {
            console.error('Invalid response:');
            console.error(response);
            return;
    }
    const feature = response.body.features[0];
    let text = "Πανεπιστήμιο Πατρών - Πρυτανεία"
    let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
    .setHTML(text)
    let marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map);
    let markerDiv = marker.getElement();
    markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
    markerDiv.addEventListener('mouseleave', () => marker.togglePopup());

    let places = document.querySelectorAll(".places #a");
    for(let i of places){
        if(i.textContent == text){
            i.addEventListener('mouseenter',()=>{
                marker = new mapboxgl.Marker({color:'black'}).setLngLat(feature.center).setPopup(popup).addTo(map)
            })
            i.addEventListener('mouseleave', ()=>{
                marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map)
                markerDiv = marker.getElement();
                markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
                markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
            })
        }
    }
    });


//νοσοκομείο
const mapboxClient3 = mapboxSdk({ accessToken: mapboxgl.accessToken });
mapboxClient2.geocoding
    .forwardGeocode({
        query: 'General University Hospital, Patras, Greece',
        autocomplete: false,
        limit: 1
    })
    .send()
    .then((response) => {
        if (
            !response ||
            !response.body ||
            !response.body.features ||
            !response.body.features.length
        ) {
            console.error('Invalid response:');
            console.error(response);
            return;
    }
    const feature = response.body.features[0];
    let text = "Πανεπιστημιακό Νοσοκομείο Ρίου"
    let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
    .setHTML(text)
    let marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map);
    let markerDiv = marker.getElement();
    markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
    markerDiv.addEventListener('mouseleave', () => marker.togglePopup());

    let places = document.querySelectorAll(".places #a");
    for(let i of places){
        if(i.textContent == text){
            i.addEventListener('mouseenter',()=>{
                marker = new mapboxgl.Marker({color:'black'}).setLngLat(feature.center).setPopup(popup).addTo(map)
            })
            i.addEventListener('mouseleave', ()=>{
                marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map)
                markerDiv = marker.getElement();
                markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
                markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
            })
        }
    }
    });

//ΟΤΕ
const mapboxClient4 = mapboxSdk({ accessToken: mapboxgl.accessToken });
mapboxClient2.geocoding
    .forwardGeocode({
        query: 'ΟΤΕ, Patras, Greece',
        autocomplete: false,
        limit: 1
    })
    .send()
    .then((response) => {
        if (
            !response ||
            !response.body ||
            !response.body.features ||
            !response.body.features.length
        ) {
            console.error('Invalid response:');
            console.error(response);
            return;
    }
    const feature = response.body.features[0];
    let text = "ΟΤΕ, Γούναρη & Κανακάρη"
    let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
    .setHTML(text)
    let marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map);
    let markerDiv = marker.getElement();
    markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
    markerDiv.addEventListener('mouseleave', () => marker.togglePopup());

    let places = document.querySelectorAll(".places #a");
    for(let i of places){
        if(i.textContent == text){
            i.addEventListener('mouseenter',()=>{
                marker = new mapboxgl.Marker({color:'black'}).setLngLat(feature.center).setPopup(popup).addTo(map)
            })
            i.addEventListener('mouseleave', ()=>{
                marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map)
                markerDiv = marker.getElement();
                markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
                markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
            })
        }
    }
    });


//TEI
let text = "ΤΕΙ Ταραμπούρα"
let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
.setHTML(text)

let marker = new mapboxgl.Marker({ color: 'red' })
.setLngLat([21.746619, 38.219941])
.setPopup(popup)
.addTo(map);

let markerDiv = marker.getElement();

markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
markerDiv.addEventListener('mouseleave', () => marker.togglePopup());

let places = document.querySelectorAll(".places #a");
    for(let i of places){
        if(i.textContent == text){
            i.addEventListener('mouseenter',()=>{
                marker = new mapboxgl.Marker({color:'black'}).setLngLat([21.746619, 38.219941]).setPopup(popup).addTo(map)
            })
            i.addEventListener('mouseleave', ()=>{
                marker = new mapboxgl.Marker({color:'red'}).setLngLat([21.746619, 38.219941]).setPopup(popup).addTo(map)
                markerDiv = marker.getElement();
                markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
                markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
            })
        }
    }