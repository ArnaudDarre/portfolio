$(document).ready(function() {

// —————————————————————————————————————————————————————————————————
// ANCHOR
// —————————————————————————————————————————————————————————————————



$('a.js-button-anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// DOT SIDEBAR

$.scrollTo = $.fn.scrollTo = function(x, y, options){
   if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);
   options = $.extend({}, {
       gap: {
           x: 0,
           y: 0
       },
       animation: {
           easing: 'swing',
           duration: 600,
           complete: $.noop,
           step: $.noop
       }
   }, options);
   return this.each(function(){
       var elem = $(this);
       elem.stop().animate({
           scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
           scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
       }, options.animation);
   });
};
var aChildren = $(".sidebar__item").children();
var aArray = [];
for (var i=0; i < aChildren.length; i++) {    
    var aChild = aChildren[i];
    var ahref = $(aChild).attr('href');
    aArray.push(ahref);
}     
$(window).scroll(function(){
    var windowPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var docHeight = $(document).height();
    for (var i=0; i < aArray.length; i++) {
        var theID = aArray[i];
        var divPos = $(theID).offset().top; 
        var divHeight = $(theID).height(); 
        if (windowPos >= divPos - 200 && windowPos < (divPos - 200 + divHeight)) {
            $(".sidebar a[href='" + theID + "']").addClass("js-dot-active");
        } else {
            $(".sidebar a[href='" + theID + "']").removeClass("js-dot-active");
        }
    }
    if(windowPos + windowHeight == docHeight) {
        if (!$(".sidebar__item:last-child a").hasClass("js-dot-active")) {
            var navActiveCurrent = $(".js-dot-active").attr("href");
            $("a[href='" + navActiveCurrent + "']").removeClass("js-dot-active");
            $(".sidebar__item:last-child a").addClass("js-dot-active");
        }
    }
});
$(".sidebar a").click(function(evn){
    evn.preventDefault();
    $('html,body').scrollTo(this.hash, this.hash);
});



// —————————————————————————————————————————————————————————————————

});