/* Efecto del scroll */

$(window).scroll(function() {
  if ($('#navbar-portafolio').offset().top > 500) {
    $('#navbar-portafolio').addClass('nav-yellow');
    $('#navbar-portafolio').removeClass('transparent');
  } else {
    $('#navbar-portafolio').removeClass('nav-yellow');
    $('#navbar-portafolio').addClass('transparent');
  }
});
