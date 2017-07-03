/**
 *	UPLB DOST Scholars' Society Website v1.0 (https://github.com/brentianluis/uplb-dostss-site)
 *	MIT License (https://github.com/brentianluis/uplb-dostss-site/blob/master/LICENSE)
 *	Copyright (c) 2017 Brent Ian Luis
 */

// Scrollspy
$('body').scrollspy({target: ".navbar", offset: 50});

$("#ssNavbar a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

// Hide Menu
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
      $(this).collapse('hide');
  }
});

//ScrollReveal
sr.reveal('.scroll-reveal', {
	origin: 'bottom',
	mobile: true,
    reset: true,
});

// Google Map
function ssMap() {
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(14.168191, 121.245037), //org house
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
    };

    var mapElement = document.getElementById('ss-map');
    var map = new google.maps.Map(mapElement, mapOptions);

    // Marker
    var iconBase = 'resources/img/ss-map-marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(14.168191, 121.245037),
        map: map,
        icon: iconBase,
        title: 'UPLB DOST SS Organization House'
    });
}

// Scroll to Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('#back-to-top').fadeIn(200);
    } else {
        $('#back-to-top').fadeOut(200);
    }
});

$('#back-to-top').click(function() {
    $('body, html').animate({
        scrollTop: 0
    }, 500);
});
