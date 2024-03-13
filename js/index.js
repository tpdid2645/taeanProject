document.addEventListener("DOMContentLoaded", function () {
  /* youth-supply-swiper */
  const supplySwiper = new Swiper(".youth-supply-swiper", {
    speed: 1200,
    autoplay: {
      delay: 1200,
    },
    loop: true,
    breakpoints: {
      375: {
        slidesPerView: 1.6,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4.3,
        spaceBetween: 24,
      },
    },
  });
  let slides = document.querySelectorAll(".swiper-slide");
  for (let i of slides) {
    i.addEventListener("mouseover", function () {
      supplySwiper.autoplay.stop();
    });
    i.addEventListener("mouseout", function () {
      supplySwiper.autoplay.start();
    });
  }
  /* hot-swiper */
  let hotSwiper = new Swiper(".hot-swiper", {
    navigation: {
      nextEl: ".hot-commu-section .swiper-button-next",
      prevEl: ".hot-commu-section .swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 1800,
    },
    speed: 1500,
    breakpoints: {
      1200: {
        slidesPerView: 3.05,
        spaceBetween: 34,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  let hotSlideToggle = document.querySelector(".hot-swiper-play-btn");
  let isHotAutoplay = true;

  hotSlideToggle.addEventListener("click", function (e) {
    if (isHotAutoplay) {
      hotSwiper.autoplay.stop();
      e.target.classList.toggle("active");
    } else {
      hotSwiper.autoplay.start();
      e.target.classList.toggle("active");
    }
    isHotAutoplay = !isHotAutoplay;
  });
  /* main-slide */
  let mainSwiper = new Swiper(".main-swiper", {
    loop: true,
    pagination: {
      el: ".main-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-swiper .swiper-button-next",
      prevEl: ".main-swiper .swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 1800,
    },
    speed: 800,
  });
  let mainSlideToggle = document.querySelector(".main-swiper-play-btn");
  let isAutoplay = true;

  mainSlideToggle.addEventListener("click", function (e) {
    if (isAutoplay) {
      mainSwiper.autoplay.stop();
      e.target.classList.toggle("active");
    } else {
      mainSwiper.autoplay.start();
      e.target.classList.toggle("active");
    }
    isAutoplay = !isAutoplay;
  });

  /* aos js */
  AOS.init({
    duration: 1200,
  });
}); /* document ready 끝 */
