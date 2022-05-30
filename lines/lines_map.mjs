let map_cont;
let map;
document.querySelector('.map').addEventListener("click", function(){
    map_cont = document.createElement("div");
    map_cont.id = "map-container";
    document.querySelector(".container").appendChild(map_cont);
    
    //map style
    map_cont.style.width = "75%";
    map_cont.style.height = "84%";
    map_cont.style.position = "absolute";
    map_cont.style.borderRadius = "10px";

    //map
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWJsZSIsImEiOiJjbDNlZ3B1OGkwYnJ5M2Nucm8yc2FqdmdhIn0.Shv1FcO_OlpCHdFDjOtV6w';
    map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [21.737442404704655, 38.250841797737515], // starting position [lng, lat]
    zoom: 12 // starting zoom
    });
})

document.querySelector(".schedule").addEventListener("click", function(e){
    document.querySelector(".container").removeChild(map_cont)
})
