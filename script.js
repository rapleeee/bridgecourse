let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
const button = document.querySelector("button");
const h6 = document.querySelector("h6");
const API = "http://api.quotable.io/random";


menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider",  {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
});

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});



button.addEventListener("click", () => {
  fetch(API).then(res => res.json()).then(data =>{
    h6.innerHTML = data.content;
  }).catch(() => alert("error fetching quote!"))
});
