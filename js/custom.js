
// Google Map
function orgMap() {
	var apt = {lat: 14.168191, lng: 121.245037};

	var map = new google.maps.Map(document.getElementById("map"),{
        center: apt,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
	});

    var marker = new google.maps.Marker({
      position: apt,
      map: map
    });
}