mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWJsZSIsImEiOiJjbDNlZ3B1OGkwYnJ5M2Nucm8yc2FqdmdhIn0.Shv1FcO_OlpCHdFDjOtV6w';
const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [21.7578, 38.2658], // starting position [lng, lat]
    zoom: 12 // starting zoom
});


// //πλατεία γεωργίου
// const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
// mapboxClient.geocoding
//     .forwardGeocode({
//         query: 'Πλατεία Γεωργίου, Patras, Greece',
//         autocomplete: false,
//         limit: 1
//     })
//     .send()
//     .then((response) => {
//         if (
//             !response ||
//             !response.body ||
//             !response.body.features ||
//             !response.body.features.length
//         ) {
//             console.error('Invalid response:');
//             console.error(response);
//             return;
//     }
//     const feature = response.body.features[0];
//     let text = "Πλατεία Γεωργίου";
//     let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
//     .setHTML(text)
//     let marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map);
//     let markerDiv = marker.getElement();
//     markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
//     markerDiv.addEventListener('mouseleave', () => marker.togglePopup());


//     let places = document.querySelectorAll(".places #a");
//     for(let i of places){
//         if(i.textContent == text){
//             i.addEventListener('mouseenter',()=>{
//                 marker = new mapboxgl.Marker({color:'black'}).setLngLat(feature.center).setPopup(popup).addTo(map)
//             })
//             i.addEventListener('mouseleave', ()=>{
//                 marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map)
//                 markerDiv = marker.getElement();
//                 markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
//                 markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
//             })
//         }
//     }
//     });
    

// //πρυτανεία
// const mapboxClient2 = mapboxSdk({ accessToken: mapboxgl.accessToken });
// mapboxClient2.geocoding
//     .forwardGeocode({
//         query: 'Πανεπιστήμιο Πατρών, Patras, Greece',
//         autocomplete: false,
//         limit: 1
//     })
//     .send()
//     .then((response) => {
//         if (
//             !response ||
//             !response.body ||
//             !response.body.features ||
//             !response.body.features.length
//         ) {
//             console.error('Invalid response:');
//             console.error(response);
//             return;
//     }
//     const feature = response.body.features[0];
//     let text = "Πανεπιστήμιο Πατρών - Πρυτανεία"
//     let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
//     .setHTML(text)
//     let marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map);
//     let markerDiv = marker.getElement();
//     markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
//     markerDiv.addEventListener('mouseleave', () => marker.togglePopup());

//     let places = document.querySelectorAll(".places #a");
//     for(let i of places){
//         if(i.textContent == text){
//             i.addEventListener('mouseenter',()=>{
//                 marker = new mapboxgl.Marker({color:'black'}).setLngLat(feature.center).setPopup(popup).addTo(map)
//             })
//             i.addEventListener('mouseleave', ()=>{
//                 marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map)
//                 markerDiv = marker.getElement();
//                 markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
//                 markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
//             })
//         }
//     }
//     });


// //νοσοκομείο
// const mapboxClient3 = mapboxSdk({ accessToken: mapboxgl.accessToken });
// mapboxClient2.geocoding
//     .forwardGeocode({
//         query: 'General University Hospital, Patras, Greece',
//         autocomplete: false,
//         limit: 1
//     })
//     .send()
//     .then((response) => {
//         if (
//             !response ||
//             !response.body ||
//             !response.body.features ||
//             !response.body.features.length
//         ) {
//             console.error('Invalid response:');
//             console.error(response);
//             return;
//     }
//     const feature = response.body.features[0];
//     let text = "Πανεπιστημιακό Νοσοκομείο Ρίου"
//     let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
//     .setHTML(text)
//     let marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map);
//     let markerDiv = marker.getElement();
//     markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
//     markerDiv.addEventListener('mouseleave', () => marker.togglePopup());

//     let places = document.querySelectorAll(".places #a");
//     for(let i of places){
//         if(i.textContent == text){
//             i.addEventListener('mouseenter',()=>{
//                 marker = new mapboxgl.Marker({color:'black'}).setLngLat(feature.center).setPopup(popup).addTo(map)
//             })
//             i.addEventListener('mouseleave', ()=>{
//                 marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map)
//                 markerDiv = marker.getElement();
//                 markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
//                 markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
//             })
//         }
//     }
//     });

// //ΟΤΕ
// const mapboxClient4 = mapboxSdk({ accessToken: mapboxgl.accessToken });
// mapboxClient2.geocoding
//     .forwardGeocode({
//         query: 'ΟΤΕ, Patras, Greece',
//         autocomplete: false,
//         limit: 1
//     })
//     .send()
//     .then((response) => {
//         if (
//             !response ||
//             !response.body ||
//             !response.body.features ||
//             !response.body.features.length
//         ) {
//             console.error('Invalid response:');
//             console.error(response);
//             return;
//     }
//     const feature = response.body.features[0];
//     let text = "ΟΤΕ, Γούναρη & Κανακάρη"
//     let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
//     .setHTML(text)
//     let marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map);
//     let markerDiv = marker.getElement();
//     markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
//     markerDiv.addEventListener('mouseleave', () => marker.togglePopup());

//     let places = document.querySelectorAll(".places #a");
//     for(let i of places){
//         if(i.textContent == text){
//             i.addEventListener('mouseenter',()=>{
//                 marker = new mapboxgl.Marker({color:'black'}).setLngLat(feature.center).setPopup(popup).addTo(map)
//             })
//             i.addEventListener('mouseleave', ()=>{
//                 marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map)
//                 markerDiv = marker.getElement();
//                 markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
//                 markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
//             })
//         }
//     }
//     });


// //TEI
// let text = "ΤΕΙ Ταραμπούρα"
// let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
// .setHTML(text)

// let marker = new mapboxgl.Marker({ color: 'red' })
// .setLngLat([21.746619, 38.219941])
// .setPopup(popup)
// .addTo(map);

// let markerDiv = marker.getElement();

// markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
// markerDiv.addEventListener('mouseleave', () => marker.togglePopup());

// let places = document.querySelectorAll(".places #a");
//     for(let i of places){
//         if(i.textContent == text){
//             i.addEventListener('mouseenter',()=>{
//                 marker = new mapboxgl.Marker({color:'black'}).setLngLat([21.746619, 38.219941]).setPopup(popup).addTo(map)
//             })
//             i.addEventListener('mouseleave', ()=>{
//                 marker = new mapboxgl.Marker({color:'red'}).setLngLat([21.746619, 38.219941]).setPopup(popup).addTo(map)
//                 markerDiv = marker.getElement();
//                 markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
//                 markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
//             })
//         }
//     }

let tab = document.querySelectorAll(".places #a");
for (let j of tab) {
    const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
        .forwardGeocode({
            query: j.textContent +', Patras, Greece',
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
            let text = j.textContent;
            let popup = new mapboxgl.Popup({ offset: [0, -20], closeButton: false, closeOnClick: false })
                .setHTML(text)
            let marker = new mapboxgl.Marker({ color: 'red' }).setLngLat(feature.center).setPopup(popup).addTo(map);
            let markerDiv = marker.getElement();
            markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
            markerDiv.addEventListener('mouseleave', () => marker.togglePopup());


            let places = document.querySelectorAll(".places #a");
            for (let i of places) {
                if (i.textContent == text) {
                    i.addEventListener('mouseenter', () => {
                        marker = new mapboxgl.Marker({ color: 'black' }).setLngLat(feature.center).setPopup(popup).addTo(map)
                    })
                    i.addEventListener('mouseleave', () => {
                        marker = new mapboxgl.Marker({ color: 'red' }).setLngLat(feature.center).setPopup(popup).addTo(map)
                        markerDiv = marker.getElement();
                        markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
                        markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
                    })
                }
            }
        });
}

//sign-in - sign-up popup window
let popuptsp = document.createElement('div');
popuptsp.className = "accounts";

popuptsp.style.backgroundColor = "rgb(137, 82, 220)";
popuptsp.style.width = "20em";
popuptsp.style.height =  "100%";
popuptsp.style.listStyleType = "none";
popuptsp.style.position = "absolute";
popuptsp.style.right = "0px";
popuptsp.style.borderTopLeftRadius = "15px"; 

//log in
let logintsp = document.createElement("div");
logintsp.className = "login";
popuptsp.appendChild(logintsp);
logintsp.style.textAlign = "center";

let txttsp = document.createElement("h2");
txttsp.textContent = "Δεν έχετε συνδεθεί";
logintsp.appendChild(txttsp);

txttsp.style.textAlign = "center";
txttsp.style.fontWeight = "500";
txttsp.style.fontSize = "1.2em"

let loginButtontsp = document.createElement("button");
loginButtontsp.textContent="Σύνδεση";
loginButtontsp.setAttribute("onclick","location.href='/login'");
logintsp.appendChild(loginButtontsp);

//register
let registertsp = document.createElement("div");
registertsp.className = "register";
registertsp.style.textAlign = "center";
popuptsp.appendChild(registertsp);

let txt2tsp = document.createElement("h2");
txt2tsp.textContent = "Δεν έχετε λογαριασμό;";
registertsp.appendChild(txt2tsp);

txt2tsp.style.textAlign = "center";
txt2tsp.style.fontWeight = "500";
txt2tsp.style.fontSize = "1.2em"

let registerButtontsp = document.createElement("button");
registerButtontsp.textContent="Δημιουργία λογαριασμού";
registerButtontsp.setAttribute("onclick","location.href='/register'");
registertsp.appendChild(registerButtontsp);

//profile button
let profileButtontsp = document.querySelector('.sign-in');

profileButtontsp.addEventListener('click', function(){
    if(profileButtontsp.id == "0"){
        document.querySelector(".content").appendChild(popuptsp);
        profileButtontsp.id = "1"
    }
    else if(profileButtontsp.id == "1"){
        document.querySelector(".content").removeChild(popuptsp);
        profileButtontsp.id = "0"
    }
});
let ntsp = document.querySelectorAll(".sign-in")[0].parentElement;
if (ntsp.id){
    while(popuptsp.childNodes[0]){
        popuptsp.removeChild(popuptsp.childNodes[0]);
    }
    let ustsp = document.createElement("h2");
    ustsp.textContent="welcome username"
    popuptsp.appendChild(ustsp);
}