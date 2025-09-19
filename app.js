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

const modalNavMobile = document.querySelector(".modal-nav-mobile");
const btnCloseNavMobile = document.querySelector(".btn-cerrar-modal");
const btnOpenNavMobile = document.querySelector(".btn-menu-mobile");
const body = document.querySelector("body");

const toggleModalMobile = (visibilidad) => {
  if (visibilidad) {
    modalNavMobile.classList.add("modal-visible");
    body.classList.add("body-no-overflow");
  } else {
    modalNavMobile.classList.remove("modal-visible");
    body.classList.remove("body-no-overflow");
  }
};

btnOpenNavMobile.addEventListener("click", () => {
  toggleModalMobile(true);
});

btnCloseNavMobile.addEventListener("click", () => {
  toggleModalMobile(false);
});
