let geocoder = new google.maps.Geocoder();
let address = "Carrer de la Selva de Mar 211 08020 Barcelona";
geocoder.geocode({ 'address': address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        latitude = results[0].geometry.location.lat();
        longitude = results[0].geometry.location.lng();
    }
});
