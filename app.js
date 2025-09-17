var mySwiper = new Swiper(".swiper-container", {
  // PARAMETROS OPCIONALES
  direction: "horizontal",
  speed: 3000,
  parallax: true,
  loop: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  // PAGINACION
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
