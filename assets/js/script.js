$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// SCRIPT
// —————————————————————————————————————————————————————————————————
// menu scroll animation
// menu open animation
// back to top
// cookie bar accept
// —————————————————————————————————————————————————————————————————

// —————————————————————————————————————————————————————————————————
// menu scroll animation
// —————————————————————————————————————————————————————————————————

$(window).scroll(function() { //the scrolled element
	var scroll = $(this).scrollTop();
	if (scroll >= 5) { //the point past whom you add the class (in pixel)
		$('.header').addClass("js-scrolled"); //the element to which add the class
	} else {
		$('.header').removeClass("js-scrolled");
	}
});

// —————————————————————————————————————————————————————————————————
// menu open animation
// —————————————————————————————————————————————————————————————————

$('.button--menu').click(function(){
	$('.header').toggleClass('js-opened');
	$('body').toggleClass('js-freeze');
});

// —————————————————————————————————————————————————————————————————
// back to top
// —————————————————————————————————————————————————————————————————

var btn = $('.button--scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 600) {
		btn.addClass('js-show');
	} else {
		btn.removeClass('js-show');
	}
});

btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '400');
});

// —————————————————————————————————————————————————————————————————
// cookie bar accept
// —————————————————————————————————————————————————————————————————

var cookieKey = "__applied_blockchain_cookie_banner"
var cookieClose = function() {
	if (typeof localStorage !== 'undefined') {
		localStorage[cookieKey] = "true"
	}
}

var displayCookieBar = function() {
	if (typeof localStorage !== 'undefined') {
		if (!localStorage[cookieKey]) {
			$(".cookie").css("display", "flex")
		}
	}
}

$(".cookie__button").on("click", cookieClose)
displayCookieBar()

$(".cookie__button").click(function(){
	$(".cookie").addClass("js-cookie-accepted");
})

// —————————————————————————————————————————————————————————————————

});