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
let popup = document.createElement('div');
popup.className = "accounts";

popup.style.backgroundColor = "rgb(137, 82, 220)";
popup.style.width = "20em";
popup.style.height = "100%";
popup.style.listStyleType = "none";
popup.style.position = "absolute";
popup.style.right = "0px";
popup.style.borderTopLeftRadius = "15px";
popup.style.textAlign = "center";

//log in
let login = document.createElement("div");
login.className = "login";
popup.appendChild(login);
login.style.textAlign = "center";

let txt = document.createElement("h2");
txt.textContent = "Δεν έχετε συνδεθεί";
login.appendChild(txt);

txt.style.textAlign = "center";
txt.style.fontWeight = "500";
txt.style.fontSize = "1.2em"

let loginButton = document.createElement("button");
loginButton.textContent = "Σύνδεση";
loginButton.setAttribute("onclick", "location.href='/login'");
login.appendChild(loginButton);

//register
let register = document.createElement("div");
register.className = "register";
register.style.textAlign = "center";
popup.appendChild(register);

let txt2 = document.createElement("h2");
txt2.textContent = "Δεν έχετε λογαριασμό;";
register.appendChild(txt2);

txt2.style.textAlign = "center";
txt2.style.fontWeight = "500";
txt2.style.fontSize = "1.2em"

let registerButton = document.createElement("button");
registerButton.textContent = "Δημιουργία λογαριασμού";
registerButton.setAttribute("onclick", "location.href='/register'");
register.appendChild(registerButton);

//profile button
let profileButton = document.querySelector('.sign-in');

profileButton.addEventListener('click', function () {
    if (profileButton.id == "0") {
        document.querySelector(".content").appendChild(popup);
        profileButton.id = "1"
    }
    else if (profileButton.id == "1") {
        document.querySelector(".content").removeChild(popup);
        profileButton.id = "0"
    }
});
let n = document.querySelectorAll(".sign-in")[0].parentElement;
n.style.textAlign = "center";
if (n.id) {
    while (popup.childNodes[0]) {
        popup.removeChild(popup.childNodes[0]);
    }
    let us = document.createElement("h2");
    us.style.textAlign = "center";
    if (n.className.split(",")[0] == "1") {
        us.textContent = "Welcome admin " + n.className.split(",")[1];
        popup.appendChild(us);
        let p1 = document.createElement("p");
        p1.style.textAlign = "center";
        p1.textContent = "\n Ενημέρωση Δεδομένων";
        popup.appendChild(p1);
        let l1 = document.createElement("li");
        let b1 = document.createElement("a");
        b1.textContent = "> Ενημέρωση Εισιτηρίων";
        b1.style.fontWeight = "lighter"
        b1.style.textDecoration = "none";
        b1.style.color = "black";
        b1.setAttribute("href", "/update-tickets");
        l1.appendChild(b1);
        popup.appendChild(l1);
        let l2 = document.createElement("li");
        let b2 = document.createElement("a");
        b2.textContent = "> Ενημέρωση Εκδοτηρίων";
        b2.style.fontWeight = "lighter"
        b2.style.textDecoration = "none";
        b2.style.color = "black";
        b2.setAttribute("href", "/update-ticket-selling-points");
        l2.appendChild(b2);
        popup.appendChild(l2);
        let l3 = document.createElement("li");
        let b3 = document.createElement("a");
        b3.textContent = "> Έξοδος";
        b3.style.fontWeight = "lighter"
        b3.style.textDecoration = "none";
        b3.style.color = "black";
        b3.setAttribute("href", "/logout");
        l3.appendChild(b3);
        popup.appendChild(l3);
    }
    else if (n.className.split(",")[0] == "0") {
        us.textContent = "Welcome user " + n.className.split(",")[1];
        popup.appendChild(us);
        let l3 = document.createElement("li");
        let b3 = document.createElement("a");
        b3.textContent = "> Έξοδος";
        b3.style.fontWeight = "lighter"
        b3.style.textDecoration = "none";
        b3.style.color = "black";
        b3.setAttribute("href", "/logout");
        l3.appendChild(b3);
        popup.appendChild(l3);
    }
}