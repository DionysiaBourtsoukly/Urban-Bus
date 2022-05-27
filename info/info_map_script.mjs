mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWJsZSIsImEiOiJjbDNlZ3B1OGkwYnJ5M2Nucm8yc2FqdmdhIn0.Shv1FcO_OlpCHdFDjOtV6w';
const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [21.737442404704655, 38.250841797737515], // starting position [lng, lat]
    zoom: 14 // starting zoom
});

let popup = new mapboxgl.Popup({offset:[0,-20], closeButton:false, closeOnClick:false})
.setHTML('<p>Αγίου Ανδρέου 9</p>')

const marker = new mapboxgl.Marker({ color: 'red' })
.setLngLat([21.737442404704655, 38.250841797737515])
.setPopup(popup)
.addTo(map);

const markerDiv = marker.getElement();

markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
