function initializeMap() {
	var revelryLatLng = new google.maps.LatLng(32.807076, -79.94501)
	
	var mapOptions = {
		center: revelryLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 15,
		scrollwheel : false,mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		// Paper 
		// styles: [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#5f94ff"},{"lightness":26},{"gamma":5.86}]},{},{"featureType":"road.highway","stylers":[{"weight":0.6},{"saturation":-85},{"lightness":61}]},{"featureType":"road"},{},{"featureType":"landscape","stylers":[{"hue":"#0066ff"},{"saturation":74},{"lightness":100}]}]

		// Pale Dawn
		// styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
		
		// Bright & Bubbly
		styles: [{"featureType":"water","stylers":[{"color":"#19a0d8"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":6}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}]
	};
	
	var map = new google.maps.Map(document.getElementById("map-to-revelry"), mapOptions);

	var contentString = [
		'<b>Revelry Brewing Co.</b>',
		'',
		'n. Boisterous festivities, while enjoying craft beer.',
		'',
		'10 Conroy Street<br />Charleston, SC 29403'
	].join('<br />');

	var infowindow = new google.maps.InfoWindow();
	infowindow.setContent(contentString);
	infowindow.setPosition(revelryLatLng);

	var marker = new google.maps.Marker({
		position: revelryLatLng,
		title:"Revelry Brewing Co."
	});

	// To add the marker to the map, call setMap();
	marker.setMap(map);

	// Automatically open the info window on load
	infowindow.open(map, marker);

	// Adjust marker and info window when screen is resized
	google.maps.event.addListener(map, 'zoom_changed', function() {
		infowindow.setContent(contentString);
		infowindow.open(map);
	});

	// if someone clicks the marker re-open the info window.  They can close the info
	// window using the x in the upper right corner.
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});

}

$(function() {

	// Sections height & scrolling
	$(window).resize(function() {
		var sH = $(window).height();
		$('section').each(function(){
			if( $(this).height() < sH ){
				$(this).css('height', (sH + 'px'));
			}
		});
		$('header, #map-to-revelry').css('height', (sH + 'px'));
	});

	// Parallax
	$('section').each(function() {
		$(this).parallax('50%', 0.3, true);
	});

	$(window).resize().scroll();

	// HEADROOM
	var headroomElement = document.querySelector("nav");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(headroomElement);
	// initialise
	headroom.init(); 

	$('html').addClass('loaded');
});

google.maps.event.addDomListener(window, 'load', initializeMap);
