// let geocoder = new google.maps.Geocoder();
// let findLoc = document.getElementById("findLoc");
// let ubicacion = document.getElementById("ubicacion");
// let myLatLng = new google.maps.LatLng(41.390205, 2.154007);
// let map;

// //let geocoder = new google.maps.Geocoder();
// let address = "Carrer de la Selva de Mar 211 08020 Barcelona";
// geocoder.geocode({ 'address': address }, function (results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//         latitude = results[0].geometry.location.lat();
//         longitude = results[0].geometry.location.lng();
//     }
// });


// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: 41.390205, lng: 2.154007 },
//     zoom: 8,
//   });
// }

 initMap();


let map;
let geocoder = new google.maps.Geocoder();

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.390205, lng: 2.154007},
        zoom: 12
    });
}

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
                icon: 'URL_DE_LA_IMATGE'
            });

            let infowindow = new google.maps.InfoWindow({
                content: "STRING + html"
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
        navigator.geolocation.ActualLoc(function(position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
            map.setZoom(9);

            let marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: 'URL_DE_LA_IMATGE'
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