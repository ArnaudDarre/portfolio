var goTopBtn = document.querySelector('.button--scrollTop');

function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;

	if (scrolled > coords * 2) { goTopBtn.classList.add('js-show'); }
	if (scrolled < coords * 2) { goTopBtn.classList.remove('js-show'); }
}

window.addEventListener('scroll', trackScroll);
