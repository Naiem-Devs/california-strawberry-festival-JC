(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".tour_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".Collection_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });


  // owlCarousel
  $(".Testimonials_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    autoplay:true,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>'
    ],
    nav: true,
    autoplayTimeout:3000
  });


  // owlCarousel
  $(".dd").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
 
  //magnificPopup
  $('#youtube').magnificPopup({
    type: 'iframe'
});

//swiper Slider
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  cssMode: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  }
});

//AOS Animation
AOS.init({
  mirror: true,
  duration: 1500,
  initClassName: 'aos-init',
  once: true,
});

})(jQuery);
