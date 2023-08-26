$(document).ready(function() {

// init Isotope
var $grid = $('.js-grid').isotope({
    layoutMode: 'fitRows'
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.button-group a.button').on('click', function(){
      $('.button-group a.button').removeClass('active');
      $(this).addClass('active');
  });

});