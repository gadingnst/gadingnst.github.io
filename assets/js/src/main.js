$(document).ready(() => {
  //menu toggle
  $('.menu-button, .menu-link').click(() => {
    $('#menu, .menu-button').fadeToggle("slow");
  });
  $(window).scroll(() => {
    changeNavbar();
  });
  $(() => {
    $(".box-col-4").slice(0, 4).show();
    $("#loadMore").on('click', (e) => {
      $(".box-col-4:hidden").slice(0, 4).show();
      if ($(".box-col-4:hidden").length == 0) {
        $("#loadMore-kontainer").fadeOut('slow');
      }
      $('html, body').animate({
        scrollTop: $(this).offset().top - 500
      }, 1500);
    });
  });
  animate();
  smoothScrollGroup();
});
