let mapLink = document.querySelectorAll(".map")
let scheduleLink = document.querySelectorAll(".schedule")
let timetable = document.querySelectorAll(".schedule-map .container .cont")
let container = timetable[0].parentNode;

//mapbox
let map_cont;
let map;
map_cont = document.createElement("div");
map_cont.id = "map-container";
container.appendChild(map_cont);

//map style
map_cont.style.width = "100%";
map_cont.style.height = "98%";
// map_cont.style.position = "absolute";
map_cont.style.borderRadius = "10px";

//map
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWJsZSIsImEiOiJjbDNlZ3B1OGkwYnJ5M2Nucm8yc2FqdmdhIn0.Shv1FcO_OlpCHdFDjOtV6w';
map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [21.737442404704655, 38.250841797737515], // starting position [lng, lat]
    zoom: 12
});

let lines = document.querySelectorAll(".line-names tr td p");
container.removeChild(map_cont);
mapLink[0].addEventListener('click', () => {
    try {
        container.removeChild(timetable[0]);
    } catch (error) {

    }
    mapLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(143, 43, 224)";
    scheduleLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(158, 75, 227)";

    //mapbox
    try {
        container.appendChild(map_cont);
    }
    catch (error) { }
})

scheduleLink[0].addEventListener('click', () => {
    try {
        container.removeChild(map_cont);
    }
    catch (error) {

    }
    container.appendChild(timetable[0]);
    mapLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(158, 75, 227)";
    scheduleLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(143, 43, 224)";
})

let c = lines.length;
let cont = document.querySelectorAll(".schedule-map .container");
let table = document.querySelectorAll(".schedule-map .container table");
let table2 = document.querySelectorAll(".schedule-map .container table tr");
let tl = table.length;
for (let i = 1; i < tl; i++) {
    table[i].parentNode.removeChild(table[i]);
}
lines[0].style.backgroundColor = "rgb(181, 118, 245)";
lines[0].style.borderRadius = "10px";

let timet = document.createElement("table");
timet.style.textAlign = "center";
for (let i of table2) {
    if (lines[0].textContent == i.children[0].textContent) {
        let len = i.children.length - 1;
        for (let j = 0; j < len; j++) {
            let arr = i.children[1].textContent.split(',')
            let td = document.createElement("td");
            td.style.textAlign = "center";
            for (let k = 0; k < arr.length; k++) {
                let tr = document.createElement("tr");
                tr.innerHTML = arr[k];
                tr.style.textAlign = "center";
                td.appendChild(tr);
            }
            timet.appendChild(td);
        }
        document.querySelector(".cont").appendChild(timet);
    }
}
let pp = document.querySelector(".cont");
for (let line of lines) {
    line.addEventListener('click', () => {
        for (let i = 0; i < c; i++) {
            lines[i].removeAttribute('style');
        }
        line.style.backgroundColor = "rgb(181, 118, 245)";
        line.style.borderRadius = "10px";
        try {
            let table = document.querySelectorAll(".schedule-map .container table");
            let tl = table.length;
            for (let i = 1; i < tl; i++) {
                table[i].parentNode.removeChild(table[i]);
            }
        }
        catch (err) { }
        let timet = document.createElement("table");
        timet.style.textAlign = "center";
        for (let i of table2) {
            if (line.textContent == i.children[0].textContent) {
                let len = i.children.length - 1;
                for (let j = 0; j < len; j++) {
                    let arr = i.children[1].textContent.split(',')
                    let td = document.createElement("td");
                    td.style.textAlign = "center";
                    for (let k = 0; k < arr.length; k++) {
                        let tr = document.createElement("tr");
                        tr.innerHTML = arr[k];
                        tr.style.textAlign = "center";
                        td.appendChild(tr);
                    }
                    timet.appendChild(td);
                }
                try {
                    document.querySelector(".cont").appendChild(timet);
                }
                catch (error) { }
            }
        }
    })
}




for (let l of lines) {
    l.addEventListener('click', function () {
        try{
            map = new mapboxgl.Map({
                container: 'map-container', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [21.737442404704655, 38.250841797737515], // starting position [lng, lat]
                zoom: 12
            });
        }
        catch(error){}
        
        fetch('/getStopsCoords/' + l.textContent).then((response) => {
            response.json().then(result => {
                for (let i = 0; i < result.lineStops.length; i++) {
                    let latitude = result.lineStops[i].gps_latitude;
                    let longitude = result.lineStops[i].gps_longtitude;
                    let stop_name = result.lineStops[i].stop_name;
                    let popup = new mapboxgl.Popup({ offset: [0, -20], closeButton: false, closeOnClick: false }).setHTML(stop_name)
                    let marker = new mapboxgl.Marker({ color: 'red', width: '5', height: '10' }).setLngLat([longitude, latitude]).setPopup(popup).addTo(map);
                    let markerDiv = marker.getElement();
                    markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
                    markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
                }

            })
        })
    })
}