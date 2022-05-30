//start point
document.getElementById("button_from").addEventListener("click", function(e){
    e.preventDefault();
    
    //faded background
    let b = document.createElement("div");
    document.querySelector(".content").appendChild(b);
    b.style.width = "100%";
    b.style.height = "100%";
    b.style.backgroundColor = "rgba(128,128,128,0.7)";
    b.style.position = "absolute";
    
    //pop-up map
    let map_cont = document.createElement("div");
    map_cont.id = "map-container";
    document.querySelector(".content").appendChild(map_cont);
    
    //map style
    map_cont.style.width = "50%";
    map_cont.style.height = "75%";
    map_cont.style.position = "absolute";
    map_cont.style.borderRadius = "10px";
    map_cont.style.margin = "5em";
    map_cont.style.marginLeft = "30em";

    //map
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWJsZSIsImEiOiJjbDNlZ3B1OGkwYnJ5M2Nucm8yc2FqdmdhIn0.Shv1FcO_OlpCHdFDjOtV6w';
    const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [21.737442404704655, 38.250841797737515], // starting position [lng, lat]
    zoom: 12 // starting zoom
    });

    map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true},
        trackUserLocation: true,
        // showUserHeading: true
        })
    );

    //close button
    let close_button = document.createElement("button");
    map_cont.appendChild(close_button);
    close_button.textContent = "Close";
    close_button.style.position = "absolute";
    close_button.style.backgroundColor = "rgba(128,128,128,0.7)"
    close_button.style.border = "0";
    close_button.style.cursor = "pointer";

    close_button.addEventListener("click", function(){
        document.querySelector(".content").removeChild(map_cont);
        document.querySelector(".content").removeChild(b);
    })

    let longtitude, latitude;
    let lnglat;
    map.on('click', (e) => {
        latitude = e.lngLat.lat;
        console.log(e.lngLat.lat)
        longtitude = e.lngLat.lng;
        console.log(e.lngLat.lng)
        let marker = new mapboxgl.Marker({color:'red'}).setLngLat([longtitude, latitude]).addTo(map);
        let markerDiv = marker.getElement();
        });
     
    
});


//destination point
document.getElementById("button_to").addEventListener("click", function(e){
    e.preventDefault();
    
    //faded background
    let b = document.createElement("div");
    document.querySelector(".content").appendChild(b);
    b.style.width = "100%";
    b.style.height = "100%";
    b.style.backgroundColor = "rgba(128,128,128,0.7)";
    b.style.position = "absolute";
    
    //pop-up map
    let map_cont = document.createElement("div");
    map_cont.id = "map-container";
    document.querySelector(".content").appendChild(map_cont);
    
    //map style
    map_cont.style.width = "50%";
    map_cont.style.height = "75%";
    map_cont.style.position = "absolute";
    map_cont.style.borderRadius = "10px";
    map_cont.style.margin = "5em";
    map_cont.style.marginLeft = "30em";

    //map
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWJsZSIsImEiOiJjbDNlZ3B1OGkwYnJ5M2Nucm8yc2FqdmdhIn0.Shv1FcO_OlpCHdFDjOtV6w';
    const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [21.737442404704655, 38.250841797737515], // starting position [lng, lat]
    zoom: 12 // starting zoom
    });


    //close button
    let close_button = document.createElement("button");
    map_cont.appendChild(close_button);
    close_button.textContent = "Close";
    close_button.style.position = "absolute";
    close_button.style.backgroundColor = "rgba(128,128,128,0.7)"
    close_button.style.border = "0";
    close_button.style.cursor = "pointer";

    close_button.addEventListener("click", function(){
        document.querySelector(".content").removeChild(map_cont);
        document.querySelector(".content").removeChild(b);
    })


    let longtitude, latitude;
    let lnglat;
    map.on('click', (e) => {
        latitude = e.lngLat.lat;
        console.log(e.lngLat.lat)
        longtitude = e.lngLat.lng;
        console.log(e.lngLat.lng)
        let marker = new mapboxgl.Marker({color:'red'}).setLngLat([longtitude, latitude]).addTo(map);
        let markerDiv = marker.getElement();
        });
});

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
    login.className = "log-in";
    popup.appendChild(login);
    
    let txt = document.createElement("h2");
    txt.textContent = "Σύνδεση";
    login.appendChild(txt);

    txt.style.textAlign = "center";
    txt.style.fontWeight = "500";
    txt.style.fontSize = "1.2em"

    //sign in form
    let signin_form = document.createElement("form");
    signin_form.setAttribute("method", "post");
    login.appendChild(signin_form);

    signin_form.style.textAlign = "center";
    signin_form.style.marginBottom = "20%";

    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("size", "22");
    input1.setAttribute("placeholder", "username");
    signin_form.appendChild(input1);

    let input2 = document.createElement("input");
    input2.setAttribute("type", "password");
    input2.setAttribute("size", "22");
    input2.setAttribute("placeholder", "password");
    signin_form.appendChild(input2);

    let b = document.createElement("button");
    b.textContent = "sign in";
    signin_form.appendChild(b);

    b.style.display = "block";
    b.style.marginLeft = "41%";
    b.style.marginTop =  "5%";


    //signup
    let signup = document.createElement("div");
    signup.className = "signup";
    popup.appendChild(signup);
    
    let txt2 = document.createElement("h2");
    txt2.textContent = "Δημιουργία Λογαριασμού";
    signup.appendChild(txt2);

    txt2.style.textAlign = "center";
    txt2.style.fontWeight = "500";
    txt2.style.fontSize = "1.2em"

    //sign up form
    let signup_form = document.createElement("form");
    signup_form.setAttribute("method", "post");
    signup.appendChild(signup_form);

    signup_form.style.textAlign = "center";
    signup_form.style.marginBottom = "20%";

    let input3 = document.createElement("input");
    input3.setAttribute("type", "email");
    input3.setAttribute("size", "22");
    input3.setAttribute("placeholder", "email");
    signup_form.appendChild(input3);

    let input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("size", "22");
    input4.setAttribute("placeholder", "username");
    signup_form.appendChild(input4);

    let input5 = document.createElement("input");
    input5.setAttribute("type", "password");
    input5.setAttribute("size", "22");
    input5.setAttribute("placeholder", "password");
    signup_form.appendChild(input5);

    let bt = document.createElement("button");
    bt.textContent = "sign up";
    signup_form.appendChild(bt);

    bt.style.display = "block";
    bt.style.marginLeft = "41%";
    bt.style.marginTop =  "5%";


let signin_button = document.querySelector('.sign-in');
signin_button.addEventListener('click', function(){
    if(signin_button.id == "0"){
        document.querySelector(".content").appendChild(popup);
        signin_button.id = "1"
    }
    else if(signin_button.id == "1"){
        document.querySelector(".content").removeChild(popup);
        signin_button.id = "0"
    }

})