$(document).ready(function () {
  $('#card-carousel').carousel({
    interval: false,
    wrap: false,
  });
  // on document ready

  $('#card-carousel').on('slid.bs.carousel', checkitem);
});

function checkitem() {
  if ($(this).find('.active').index() == 0)
    $('.left-carousel-btn').addClass('disabled btn-secondary');
  else $('.left-carousel-btn').removeClass('disabled btn-secondary');
  // check function
  if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
    $('.right-carousel-btn').addClass('disabled btn-secondary');
  } else {
    $('.right-carousel-btn').removeClass('disabled btn-secondary');
  }
}
