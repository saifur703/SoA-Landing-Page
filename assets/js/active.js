(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.popular-products-slider').owlCarousel({
      items: 5,
      margin: 30,
      loop: true,
      dots: true,
      nav: false,
      navText: [
        "<i class='fa fa-long-arrow-left'></i>",
        "<i class='fa fa-long-arrow-right'></i>",
      ],
      autoplay: false,
      responsive: {
        0: {
          items: 3,
        },
        480: {
          items: 3,
        },
        768: {
          items: 4,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 5,
        },
      },
    });
    $('.featured-products-slider').owlCarousel({
      items: 5,
      margin: 30,
      loop: true,
      dots: true,
      nav: false,
      navText: [
        "<i class='fa fa-long-arrow-left'></i>",
        "<i class='fa fa-long-arrow-right'></i>",
      ],
      autoplay: false,
      responsive: {
        0: {
          items: 3,
        },
        480: {
          items: 3,
        },
        768: {
          items: 4,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 5,
        },
      },
    });

    /*==============================
            Smooth Scroll Down
        ================================*/
    $('a').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });

  jQuery(window).on('load', function () {});
})(jQuery);
