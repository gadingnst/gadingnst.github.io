'use strict';

//animasi scroll
function animate() {
  function animasiWindowScroll(elemen, animasi) {
    function if_view() {
      var window_height = $(window).height();
      var window_top_scroll = $(window).scrollTop();
      var window_bottom_scroll = window_height + window_top_scroll;
      $.each(elemen, function () {
        var _this = this;

        var element_height = $(this).outerHeight();
        var element_diatas_plus = $(this).offset().top + 120;
        var element_dilihat = element_height + element_diatas_plus >= window_top_scroll && element_diatas_plus <= window_bottom_scroll;
        if (element_dilihat) {
          setTimeout(function () {
            $(_this).addClass(animasi);
            $("#hcb_form > div > a, label[for=hcb_file]").hide();
          }, 200);
        }
      });
    }
    $(window).on('scroll resize', if_view);
    $(window).trigger('scroll');
  }
  animasiWindowScroll($('.animasi-scroll-opacity'), 'animasi-in-opacity');
  animasiWindowScroll($('.animasi-scroll-top'), 'animasi-in-top');;
  animasiWindowScroll($('.animasi-scroll-right'), 'animasi-in-right');
  animasiWindowScroll($('.animasi-scroll-bottom'), 'animasi-in-bottom');
  animasiWindowScroll($('.animasi-scroll-left'), 'animasi-in-left');
  animasiWindowScroll($('.animasi-scroll-topleft'), 'animasi-in-topleft');
  animasiWindowScroll($('.animasi-scroll-topright'), 'animasi-in-topright');
  animasiWindowScroll($('.animasi-scroll-bottomleft'), 'animasi-in-bottomleft');
  animasiWindowScroll($('.animasi-scroll-bottomright'), 'animasi-in-bottomright');
  animasiWindowScroll($('.animasi-scroll-zoom'), 'animasi-in-zoom');
};
//interaktif scroll
function smoothScrollGroup() {
  function smoothScroll(getID, linkID) {
    getID.click(function () {
      $('html, body').animate({
        scrollTop: linkID.offset().top
      }, 2000);
    });
  }
  smoothScroll($('#navbar-home'), $('#home'));
  smoothScroll($('#about-link'), $('#about'));
  smoothScroll($('#portfolio-link'), $('#portfolio'));
  smoothScroll($('#report-link'), $('#report'));
  smoothScroll($('#contact-link'), $('#contact'));
};

//navbar interaktif
function changeNavbar() {
  if ($(window).scrollTop() > 85) {
    $(".navbar").css({
      "background-color": "white",
      "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      "padding": "10px"
    });
    $("#navbar-home").css({
      "color": "black",
      "text-shadow": "none"
    });
  } else {
    $(".navbar").css({
      "background-color": "transparent",
      "box-shadow": "none",
      "padding": "25px"
    });
    $("#navbar-home").css({
      "color": "white",
      "text-shadow": "0.5px 0.5px 15px black"
    });
  }
}