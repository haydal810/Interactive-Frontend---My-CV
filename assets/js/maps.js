function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: {
            lat: 50.944805,
            lng: -2.988457
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.507298, lng: -0.127703  },
        { lat: 40.852305, lng: 14.268187 },
        { lat: 42.640230, lng: 18.110250 },
        { lat: 53.346430, lng: -6.263992 },
        { lat: -37.814705, lng: 144.963406 },
        { lat: -36.848089, lng: 174.761865}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });


    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
