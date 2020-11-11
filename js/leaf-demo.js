


			var greenIcon = L.icon({
    iconUrl: 'http://localhost/real/css/images/real.png',
   // shadowUrl: 'http://localhost/real/css/images/leaf-shadow.png',
	//shadowUrl: 'layers.png',

    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 18,
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
			}),
			
			
			
			
			
			
			
			latlng = L.latLng(-37.82, 175.24);

		var map = L.map('mapfull', {center: latlng, zoom: 13, layers: [tiles]});

		var markers = L.markerClusterGroup();
		
		for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[2];
			
			//var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
			var marker = L.marker(new L.LatLng(a[0], a[1]),{ icon: greenIcon }, { title: title });
			
			marker.bindPopup('<div class="agency-5 agent-6"><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 px-0 change"><div class="parallex"><div class=""> <img src="images/agencyd3.png" class="img-fluid img-full"></div><div class="h2-lies2"><ul class="list-unstyled m-3 text-right"><li class="list-inline-item"><a href="#" class="active-h"><i class="la la-camera-retro"></i></a></li><li class="list-inline-item"><a href="#" class="active-a"><i class="la la-bar-chart-o "></i></a> </li><li class="list-inline-item"> <a href="#" class="active-h"><i class="lni-heart-filled"></i></a></li></ul></div><div class="title-b map-pop"><p class="mt-2 mb-0"><span class="clr-blu">$80,000 </span> / mo</p><h2 class="card-title mb-0 clr-white">Exterior House Real Estate</h2></div></div></div></div>');
			markers.addLayer(marker);
		}
		
	

//L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
		

		map.addLayer(markers);
