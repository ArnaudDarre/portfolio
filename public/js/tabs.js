$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// TABS
// —————————————————————————————————————————————————————————————————



// solutions

$(".tab--vertical .tab__nav a").click(function(event) {
	event.preventDefault();
	$(this).addClass("nav__button--active");
	$(this).siblings().removeClass("nav__button--active");
	var tab = $(this).attr("href");
	$(".solutions.tab--vertical .tab__item").not(tab).css("display", "none");
	$(tab).fadeIn(400);
});



// —————————————————————————————————————————————————————————————————

});