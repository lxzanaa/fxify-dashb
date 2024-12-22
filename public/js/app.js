var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  pagination: {
    el: ".custom-pagination-1", // Target the custom pagination class
  },
});

var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 5, // Show 5 slides at a time
  // spaceBetween: 5, // Add space between the cards (optional)
});

var swiper = new Swiper(".mySwiper3", {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 5, // Show 5 slides at a time
  spaceBetween: 16, // Add space between the cards (optional)
});

const show_summary_button_1 = document.querySelector("#Show_Summary_button_1");
const show_summary_arrow_1 = document.querySelector(".Show_Summary_arrow_1");
const show_summary_menu_1 = document.querySelector(".Show_Summary_menu_1");

show_summary_button_1.addEventListener("click", () => {
  show_summary_arrow_1.classList.toggle("rotate-180");
  show_summary_menu_1.classList.toggle("hidden");
});

const show_summary_button_2 = document.querySelector("#Show_Summary_button_2");
const show_summary_arrow_2 = document.querySelector(".Show_Summary_arrow_2");
const show_summary_menu_2 = document.querySelector(".Show_Summary_menu_2");

show_summary_button_2.addEventListener("click", () => {
  show_summary_arrow_2.classList.toggle("rotate-180");
  show_summary_menu_2.classList.toggle("hidden");
});

const show_summary_button_3 = document.querySelector("#Show_Summary_button_3");
const show_summary_arrow_3 = document.querySelector(".Show_Summary_arrow_3");
const show_summary_menu_3 = document.querySelector(".Show_Summary_menu_3");

show_summary_button_3.addEventListener("click", () => {
  show_summary_arrow_3.classList.toggle("rotate-180");
  show_summary_menu_3.classList.toggle("hidden");
});
