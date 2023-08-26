$(document).ready(function() {

  // init Isotope
  var $grid = $('.js-grid').isotope({
    layoutMode: 'fitRows'
  });
  // filter items on button click
  $('.js-filter-buttons').on( 'click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.js-filter-buttons a.tab').on('click', function () {
    $('.js-filter-buttons a.tab').removeClass('tab--active');
    $(this).addClass('tab--active');
  });

});
