/* Efecto del scroll */
/*
$(window).scroll(function() {
  if ($('#navbar-portafolio').offset().top > 5) {
    $('#navbar-portafolio').addClass('bg-dark');
    $('#navbar-portafolio').removeClass('transparent');
  } else {
    $('#navbar-portafolio').removeClass('bg-dark');
    $('#navbar-portafolio').addClass('transparent');
  }
});*/

$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 280px, adds/removes bg-dark/transparent class
    if ($(this).scrollTop() > 280) {
      $('#navbar-portafolio').addClass('bg-dark');
      $('#navbar-portafolio').removeClass('transparent');
    } else {
      $('#navbar-portafolio').addClass('transparent');
      $('#navbar-portafolio').removeClass('bg-dark');
    }
  });
});
