mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWJsZSIsImEiOiJjbDNlZ3B1OGkwYnJ5M2Nucm8yc2FqdmdhIn0.Shv1FcO_OlpCHdFDjOtV6w';
const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [21.737442404704655, 38.250841797737515], // starting position [lng, lat]
    zoom: 14 // starting zoom
});
map.on('render',function(){
    map.resize();
});

const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
mapboxClient.geocoding
    .forwardGeocode({
        query: 'Αγίου Ανδρέου 9, Patras, Greece',
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
    let text = "Αγίου Ανδρέου 9";
    let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
    .setHTML(text)
    let marker = new mapboxgl.Marker({color:'red'}).setLngLat(feature.center).setPopup(popup).addTo(map);
    let markerDiv = marker.getElement();
    markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
    markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
})

//sign-in - sign-up popup window
let popup = document.createElement('div');
popup.className = "accounts";

popup.style.backgroundColor = "rgb(137, 82, 220)";
popup.style.width = "20em";
popup.style.height =  "100%";
popup.style.listStyleType = "none";
popup.style.position = "absolute";
popup.style.right = "0px";
popup.style.borderTopLeftRadius = "15px"; 

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
loginButton.textContent="Σύνδεση";
loginButton.setAttribute("onclick","location.href='/login'");
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
registerButton.textContent="Δημιουργία λογαριασμού";
registerButton.setAttribute("onclick","location.href='/register'");
register.appendChild(registerButton);

//profile button
let profileButton = document.querySelector('.sign-in');

profileButton.addEventListener('click', function(){
    if(profileButton.id == "0"){
        document.querySelector(".content").appendChild(popup);
        profileButton.id = "1"
    }
    else if(profileButton.id == "1"){
        document.querySelector(".content").removeChild(popup);
        profileButton.id = "0"
    }
});
let n = document.querySelectorAll(".sign-in")[0].parentElement;
if (n.id){
    while(popup.childNodes[0]){
        popup.removeChild(popup.childNodes[0]);
    }
    let us = document.createElement("h2");
    us.textContent="welcome username"
    popup.appendChild(us);
}
