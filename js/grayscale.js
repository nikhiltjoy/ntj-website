/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function(){
	var cRatio = {height:0,width:0};
	var lRatio;
	var cArray = ["rgb(255,255,255)","rgb(0,0,0)","rgb(0,0,0)","rgb(255,255,255)"]
	
	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$('#timeline').height($(window).height()-$('#navBar').height());
			$(".textNav").css("color",cArray[0]);
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$('#timeline').height($(window).height());
			var index = $('#myCarousel').find('.active').index();
			$(".textNav").css("color",cArray[index]);
		}
	});
	
	$(window).load(function(){ // On load
	 	if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
		$('#button').css('bottom', parseFloat($('.hover').css('margin-bottom'))-$('#button').height()/2);
		cRatio.height = $('#introContainer').height()/$(window).height();
		cRatio.width = $('#introContainer').width()/$(window).width();
		lRatio = $('#logo').height()/$('#introContainer').height();
		$('#timeline').height($(window).height()-$('#navBar').height());
		$('#introContainer').height($(window).height()*0.55-$('#button').height());
		$('#introContainer').width($(window).width()*0.7);
		$('#logo').height($('#introContainer').height()*0.76).width($('#introContainer').height()*0.76);
		$('#logoContainer').height($('#introContainer').height()*0.76).width($('#introContainer').height()*0.76);
	});
	$(window).resize(function(){ // On resize
		var height = $(window).height();
		var width = $(window).width();
		$('#timeline').height($(window).height());
		$('#introContainer').height($(window).height()*0.55-$('#button').height());
		$('#button').css('bottom', parseFloat($('.hover').css('margin-bottom'))-$('#button').height()/2);
		$('#introContainer').width($(window).width()*0.7);
		$('#logo').height($('#introContainer').height()*0.76).width($('#introContainer').height()*0.76);
		$('#logoContainer').height($('#introContainer').height()*0.76).width($('#introContainer').height()*0.76);
		$('#introContainer').css('left', $(window).width()*585/1280);
		$('#button').css('left', $(window).width()/2);
		if ($(window).width() >= 768 && $(".navbar").offset().top < 50) {
			var index = $('#myCarousel').find('.active').index();
			$(".textColor").css('color',cArray[index]);
		} else {
			$(".textColor").css({color:"#fff"});
		}
	});
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('#myCarousel').carousel({
    interval: 5000,
    cycle: true
});

$('#myCarousel').on('slide.bs.carousel',function(e){
    var index = $(this).find('.active').index();
    var slideTo = $(e.relatedTarget).index();
	if ($(window).width() >= 768 && $(".navbar").offset().top < 50){
		if (slideTo === 0 || slideTo === 3){
			$(".textColor").animate({color:"#fff"},600);	
		} else {
			$(".textColor").animate({color:"#000"},600);
		}
	} else {
			$(".textColor").css({color:"#fff"});
	}
	if (slideTo % 2 === 0){
		$(".intro-body-text").animate({backgroundColor:"rgba(0, 0, 0, 0.4)"},600);	
	} else {
		$(".intro-body-text").animate({backgroundColor:"rgba(255, 255, 255, 0.4)"},600);
	}
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
