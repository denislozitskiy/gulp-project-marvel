// Initialize and add the map
function initMap() {
    // The location of Uluru
    var pinsk = {lat: 52.112, lng: 26.106};
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 6, center: pinsk});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: pinsk, map: map});
}