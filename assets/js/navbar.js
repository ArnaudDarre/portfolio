$(document).ready(function () {

$(function () {

    let body = $('body');
    let navbar = $('.navbar');
    let button = $('.button--menu');

    button.on('click', function () {
        button.toggleClass('button--menu--open');
        navbar.toggleClass('js-opened');
        body.toggleClass('js-freeze');
    });
});

});
