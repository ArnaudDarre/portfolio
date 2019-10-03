$(document).ready(function() {



// —————————————————————————————————————————————————————————————————
// TOOLTIPS
// —————————————————————————————————————————————————————————————————

// tracking with title

$('.tooltip__trigger--tracking').hover(function(){
	var title = $(this).attr('title');
	$(this).data('tipText', title).removeAttr('title');
	$('<p class="tooltip__inner tooltip__inner--tracking"></p>')
	.text(title)
	.appendTo('body')
	.fadeIn('slow');
}, function() {
	$(this).attr('title', $(this).data('tipText'));
	$('.tooltip__inner--tracking').remove();
}).mousemove(function(e) {
	var mousex = e.pageX + 20;
	var mousey = e.pageY + 20;
	$('.tooltip__inner--tracking')
	.css({ top: mousey, left: mousex })
});

// trancking with html element

var tooltips = document.querySelectorAll('.tooltip--tracking .tooltip__content');

window.onmousemove = function (e) {
    var x = (e.clientX - 400) + 'px',
        y = (e.clientY + 150) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};



// —————————————————————————————————————————————————————————————————

});