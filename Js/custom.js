// Wow Js Function
new WOW().init();


// Sticky top-navbar
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.sticky-top').css('top', '0px');
  } else {
    $('.sticky-top').css('top', '-100px');
  }
});