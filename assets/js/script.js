$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// back to top
// cookie bar accept
// —————————————————————————————————————————————————————————————————

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

var cookieKey = "__arnaud_darre_portfolio_cookie_banner"
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
