let mapLink = document.querySelectorAll(".map")
let scheduleLink = document.querySelectorAll(".schedule")
let timetable = document.querySelectorAll(".schedule-map .container table")
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
    zoom: 12});

let lines = document.querySelectorAll(".line-names tr td p");

mapLink[0].addEventListener('click', ()=>{
    try {
        container.removeChild(timetable[0]);
    } catch (error) {
        
    }
    mapLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(143, 43, 224)";
    scheduleLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(158, 75, 227)";
    
    //mapbox
    try{
        container.appendChild(map_cont);
    }
    catch(error){}
})

scheduleLink[0].addEventListener('click', ()=>{
    try{
        container.removeChild(map_cont);
    }
    catch(error){

    }
    container.appendChild(timetable[0]);
    mapLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(158, 75, 227)";
    scheduleLink[0].querySelectorAll("p")[0].style.backgroundColor = "rgb(143, 43, 224)";    
})

// let c = lines.length;
// let table = document.querySelectorAll(".schedule-map .container table tr");
// for(let line of lines){
//     line.addEventListener('click',()=>{
//         for(let i=0;i<c;i++){
//             lines[i].removeAttribute('style');
//         }
//         line.style.backgroundColor = "rgb(181, 118, 245)";
//         line.style.borderRadius = "10px";
//         for(let j=1;j<table.length;j++){
//             for(let k=0;k<table[j].cells.length;k++){
//                 table[j].cells[k].innerHTML = Array.from(lines).indexOf(line);
//             }
//         }
//     })
// }