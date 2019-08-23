$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// CAROUSEL
// —————————————————————————————————————————————————————————————————



$('.owl-carousel').owlCarousel({
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    responsive: {
        0: {
			items: 2,
			margin: 20
        },
        450: {
			items: 2,
			margin: 50
        },
		620: {
			items: 3,
			margin: 50
        },
        767: {
			items: 4,
			margin: 50
        },
        1080: {
			items: 5,
			margin: 80
        }
    }
});



// —————————————————————————————————————————————————————————————————

});