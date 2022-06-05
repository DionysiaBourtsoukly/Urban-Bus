//start point
document.getElementById("button_from").addEventListener("click", function (e) {
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
            positionOptions: { enableHighAccuracy: true },
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

    close_button.addEventListener("click", function () {
        document.querySelector(".content").removeChild(map_cont);
        document.querySelector(".content").removeChild(b);
    })

    let longtitude, latitude;
    let lnglat;
    map.on('click', (e) => {
        latitude = e.lngLat.lat;
        longtitude = e.lngLat.lng;
        fetch("/getNearestStops/" + latitude + "/" + longtitude).then((response) => response.json().then(result => {
            document.querySelector(".from_input input").setAttribute("value", result.closest_stop)
            document.querySelector(".from_input input").value = result.closest_stop
        }))
        let marker = new mapboxgl.Marker({ color: 'red' }).setLngLat([longtitude, latitude]).addTo(map);
        let markerDiv = marker.getElement();
        if (document.querySelector(".searchList")) document.querySelector(".content").removeChild(document.querySelector(".searchList"))
    });


});


//destination point
document.getElementById("button_to").addEventListener("click", function (e) {
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

    close_button.addEventListener("click", function () {
        document.querySelector(".content").removeChild(map_cont);
        document.querySelector(".content").removeChild(b);
    })


    let longtitude, latitude;
    let lnglat;
    map.on('click', (e) => {
        latitude = e.lngLat.lat;
        longtitude = e.lngLat.lng;
        fetch("/getNearestStops/" + latitude + "/" + longtitude).then((response) => {
            response.json().then(result => {
                document.querySelector(".to_input input").setAttribute("value", result.closest_stop)
                document.querySelector(".to_input input").value = result.closest_stop
            })
        })
        let marker = new mapboxgl.Marker({ color: 'red' }).setLngLat([longtitude, latitude]).addTo(map);
        let markerDiv = marker.getElement();
        if (document.querySelector(".searchList")) document.querySelector(".content").removeChild(document.querySelector(".searchList"))
    });
});

document.querySelector(".from_input input").addEventListener('click', function () {
    let searchList = document.createElement('div')
    searchList.className = "searchList"
    searchList.style.width = "14.6%"
    searchList.style.height = "24.5%"
    searchList.style.position = "absolute"
    searchList.style.marginTop = "9.5em"
    searchList.style.marginLeft = "14.9em"
    searchList.style.backgroundColor = "rgba(240,240,240,1)"
    searchList.style.overflowX = "hidden"
    searchList.style.overflowY = "auto"
    document.querySelector(".content").appendChild(searchList)
    fetch("/showStopList/").then((response) => {
        response.json().then(result => {
            let list = document.createElement('ul');
            list.style.padding = "0"
            searchList.appendChild(list)
            for (let i of result.stops) {
                let list_element = document.createElement('li');
                list_element.textContent = i.stop_name
                list_element.style.listStyleType = "none"
                list_element.style.cursor = "pointer"
                list.appendChild(list_element)


                list_element.addEventListener('click', function () {
                    document.querySelector(".from_input input").setAttribute("value", list_element.textContent)
                    document.querySelector(".from_input input").value = list_element.textContent
                    document.querySelector(".content").removeChild(searchList)
                })
            }
        })
    })


})

document.querySelector(".to_input input").addEventListener('click', function () {
    let searchList = document.createElement('div')
    searchList.className = "searchList"
    searchList.style.width = "14.6%"
    searchList.style.height = "24.5%"
    searchList.style.position = "absolute"
    searchList.style.marginTop = "14.2em"
    searchList.style.marginLeft = "14.8em"
    searchList.style.backgroundColor = "rgba(240,240,240,1)"
    searchList.style.overflowX = "hidden"
    searchList.style.overflowY = "auto"
    document.querySelector(".content").appendChild(searchList)
    fetch("/showStopList/").then((response) => {
        response.json().then(result => {
            let list = document.createElement('ul');
            list.style.padding = "0"
            searchList.appendChild(list)
            for (let i of result.stops) {
                let list_element = document.createElement('li');
                list_element.textContent = i.stop_name
                list_element.style.listStyleType = "none"
                list_element.style.cursor = "pointer"
                list.appendChild(list_element)

                list_element.addEventListener('click', function () {
                    document.querySelector(".to_input input").setAttribute("value", list_element.textContent)
                    document.querySelector(".to_input input").value = list_element.textContent
                    document.querySelector(".content").removeChild(searchList)
                })
            }
        })
    })
})

document.querySelector(".from_input input").addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        let txt = document.getElementById("start").value;
        document.querySelector(".from_input input").setAttribute("value", txt)
        document.querySelector(".from_input input").value = txt
        document.getElementById("start").disabled = true;
        document.getElementById("start").disabled = false;
        if (document.querySelector(".searchList")) document.querySelector(".content").removeChild(document.querySelector(".searchList"))
    }
})


document.querySelector(".to_input input").addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        let txt = document.getElementById("dest").value;
        document.querySelector(".to_input input").setAttribute("value", txt)
        document.querySelector(".to_input input").value = txt
        document.getElementById("start").disabled = true;
        document.getElementById("start").disabled = false;
        if (document.querySelector(".searchList")) document.querySelector(".content").removeChild(document.querySelector(".searchList"))
    }
})




document.querySelector(".search_button button").addEventListener('click', function () {
    if (document.querySelector(".from_input input").getAttribute("value") != null && document.querySelector(".to_input input").getAttribute("value") != null) {
        let start = document.querySelector(".from_input input").getAttribute("value");
        let destination = document.querySelector(".to_input input").getAttribute("value");
        fetch("/findLines/" + start + "/" + destination).then((response) => {
            response.json().then(result => {
                if (result.lines.length != 0) {
                    if (document.querySelector(".no-searches")) document.querySelector(".searches").removeChild(document.querySelector(".no-searches"))
                    if (document.querySelector(".searches ul")) document.querySelector(".searches").removeChild(document.querySelector(".searches ul"))
                    let list = document.createElement('ul');
                    list.style.padding = "0"
                    document.querySelector(".searches").appendChild(list)
                    document.querySelector(".searches").style.justifyContent = "left"
                    document.querySelector(".searches").style.paddingTop = "1em"
                    document.querySelector(".searches").style.paddingLeft = "2em"
                    for (let i of result.lines) {
                        let list_element = document.createElement('li');
                        let line_num = document.createElement('div');
                        line_num.textContent = i.line_number;
                        line_num.style.display = "inline-flex"
                        line_num.style.fontSize = "2em"
                        line_num.style.fontWeight = "bold"
                        line_num.style.marginRight = "1em"
                        list_element.appendChild(line_num)
                        let wait_time = document.createElement('div')
                        wait_time.style.display = "inline-flex"
                        wait_time.style.fontSize = "1.5em"
                        wait_time.textContent = i.waiting_time + "λεπτά";
                        list_element.appendChild(wait_time);
                        list_element.style.listStyleType = "none"
                        list.appendChild(list_element)
                    }

                }
                else {

                    if (!document.querySelector(".no-searches")) {
                        let ns = document.createElement('div');
                        ns.className = "no-searches";
                        document.querySelector(".searches").appendChild(ns)
                    }
                    if (document.querySelector(".searches ul")) {
                        document.querySelector(".searches").removeChild(document.querySelector(".searches ul"))
                    }

                    document.querySelector(".no-searches").textContent = ">> Δεν υπάρχει απευθείας δρομολόγιο από " + start + " προς " + destination;
                    document.querySelector(".no-searches").style.marginLeft = "1em";
                    document.querySelector(".no-searches").style.fontWeight = "bold"
                }
            })
        })

    }
})

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
