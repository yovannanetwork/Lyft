var map;
function initMap() {
	
  map = new google.maps.Map(document.getElementById('mapa'), {
    center: {lat: -16.4527971,
			 lng: -71.53307649999999},
    zoom: 14
  });
	// Create a marker and set its position.
	    var myLatLng = {lat: -16.4971485, lng: -71.5309593};
		/*var myLatLng1 = {lat: -16.4571585, lng: -71.5307093};
	    var myLatLng2 = {lat: -16.4571685, lng: -71.5301593};*/
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!',
		  label: "x",
		  icon: "img/carrito1.png"
        });
}
//var pazPeru = new google.maps.marker({position: laLogPazPeru, map: miMapa, })