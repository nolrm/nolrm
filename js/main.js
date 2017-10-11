;(function () {
    'use strict';

    window.sr = new scrollReveal();

    $('.theme-switcher-dark').on('click', function() {
      $('.js-css-url').attr('href', '/css/ui-dark.css')
    });

    $('.theme-switcher-light').on('click', function() {
      $('.js-css-url').attr('href', '/css/ui-light.css')
    });

}());
