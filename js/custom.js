/**
 *	UPLB DOST Scholars' Society Website v1.0 (https://github.com/brentianluis/uplb-dostss-site)
 *	MIT License (https://github.com/brentianluis/uplb-dostss-site/blob/master/LICENSE)
 *	Copyright (c) 2017 Brent Ian Luis
 */

// Google Map
function orgMap() {
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(14.168191, 121.245037), //org house
        //styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    // Marker
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(14.168191, 121.245037),
        map: map,
        title: 'UPLB DOST SS Organization House'
    });
}//orgMap