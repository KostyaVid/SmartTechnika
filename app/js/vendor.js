const swiper = new Swiper('.swiper', {
   effect: 'fade',
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
 });