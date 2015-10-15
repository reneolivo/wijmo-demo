$(document).ready(function() {
  'use strict';

  var mainNavBar = $('#main-nav');
  var paralaxContainer = $('.parallax-container').first();

  $(window).resize(adjustNavBar);

  adjustNavBar();

  function adjustNavBar() {
    var width = paralaxContainer.width();
    mainNavBar.width(width);
  }
});
