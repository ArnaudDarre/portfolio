$(document).ready(function() {

  // init Isotope
  var $grid = $('.js-grid').isotope({
    layoutMode: 'fitRows',
    filter: '.design'
  });
  // filter items on button click
  $('.js-filter-buttons').on( 'click', '.tab', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.js-filter-buttons .tab').on('click', function () {
    $('.js-filter-buttons .tab')
      .removeClass('tab--active')
      .attr('aria-selected', 'false');
    $(this)
      .addClass('tab--active')
      .attr('aria-selected', 'true');
  });

});
