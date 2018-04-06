/* Efecto del scroll */

$(window).scroll(function() {
  if ($('#navbar-portafolio').offset().top > 300) {
    $('#navbar-portafolio').addClass('bg-dark');
    $('#navbar-portafolio').removeClass('transparent');
  } else {
    $('#navbar-portafolio').removeClass('bg-dark');
    $('#navbar-portafolio').addClass('transparent');
  }
});

