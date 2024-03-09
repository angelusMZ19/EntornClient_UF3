let geocoder = new google.maps.Geocoder();
let findLoc = document.getElementById("findLoc");
let ubicacion = document.getElementById("ubicacion");
let myLatLng = new google.maps.LatLng(41.390205, 2.154007);
let map;

//let geocoder = new google.maps.Geocoder();
let address = "Carrer de la Selva de Mar 211 08020 Barcelona";
geocoder.geocode({ 'address': address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        latitude = results[0].geometry.location.lat();
        longitude = results[0].geometry.location.lng();
    }
});


async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.390205, lng: 2.154007 },
    zoom: 8,
  });
}

initMap();