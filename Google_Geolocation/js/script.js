
let map;

let geocoder = new google.maps.Geocoder();

async function initMap() {
    const {Map} = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById('map'), {
        center: {lat: 41.390205, lng: 2.154007},
        zoom: 12
    });
}

initMap();

function findLoc() {
    let address = document.getElementById('adreca').value;

    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            let latitude = results[0].geometry.location.lat();
            let longitude = results[0].geometry.location.lng();

            document.getElementById('latitude').value = latitude;
            document.getElementById('longitude').value = longitude;

            let center = new google.maps.LatLng(latitude, longitude);
            map.setCenter(center);
            map.setZoom(16);

            let marker = new google.maps.Marker({
                position: {lat: latitude, lng: longitude},
                map: map,
                icon:  './img/pin.png'
            });

            let infowindow = new google.maps.InfoWindow({
                content:  document.getElementById("adreca").value
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        } else {
            alert("L'adreça no s'ha trobat.");
        }
    });
}

function ActualLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
            map.setZoom(9);

            let marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: './img/pin.png'
            });

            let infowindow = new google.maps.InfoWindow({
                content: "Your current location"
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        });
    } else {
        alert("La geolocalització no és compatible amb aquest navegador.");
    }
}