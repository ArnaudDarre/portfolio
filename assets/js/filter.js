// init Isotope
var grid = document.querySelector('.js-grid');
var isotope = new Isotope(grid, {
  layoutMode: 'fitRows'
});

// filter items on button click
var filterButtons = document.querySelector('.js-filter-buttons');
filterButtons.addEventListener('click', function (event) {
  if (event.target.classList.contains('tab')) {
    var filterValue = event.target.getAttribute('data-filter');
    isotope.arrange({ filter: filterValue });

    // Manage active tab
    var tabs = document.querySelectorAll('.js-filter-buttons .tab');
    tabs.forEach(function (tab) {
      tab.classList.remove('tab--active');
    });
    event.target.classList.add('tab--active');
  }
});
