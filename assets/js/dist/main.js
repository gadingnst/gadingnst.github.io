'use strict';

$(document).ready(function () {
  //menu toggle
  $('.menu-button, .menu-link').click(function () {
    $('#menu, .menu-button').fadeToggle("slow");
  });
  $(window).scroll(function () {
    changeNavbar();
  });
  $(function () {
    $(".box-col-4").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
      $(".box-col-4:hidden").slice(0, 4).show();
      if ($(".box-col-4:hidden").length == 0) {
        $("#loadMore-kontainer").fadeOut('slow');
      }
      $('html, body').animate({
        scrollTop: $(undefined).offset().top - 500
      }, 1500);
    });
  });
  animate();
  smoothScrollGroup();
});