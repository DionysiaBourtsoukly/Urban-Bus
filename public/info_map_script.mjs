mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWJsZSIsImEiOiJjbDNlZ3B1OGkwYnJ5M2Nucm8yc2FqdmdhIn0.Shv1FcO_OlpCHdFDjOtV6w';
const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [21.737442404704655, 38.250841797737515], // starting position [lng, lat]
    zoom: 14 // starting zoom
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
