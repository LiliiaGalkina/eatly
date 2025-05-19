"use strict";

//меню-бургер

let burger = document.querySelector("#burger");
let menu = document.querySelector("#menu");

burger.addEventListener("click", func);

function func() {
  burger.classList.toggle("menu__burger_active");
  menu.classList.toggle("menu__list_active");
}

// слайдер

$(document).ready(function () {
  $(".slider").slick({
    infinite: false,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//изменение стрелок при прокрутке слайдов

document.addEventListener("DOMContentLoaded", () => {
  const prevArrow = document.querySelector(".slick-prev");
  const nextArrow = document.querySelector(".slick-next");
  const slides = document.querySelectorAll(".slider__item");

  const arrowCheck = (arrow) => {
    if (arrow.classList.contains("slick-disabled")) {
      arrow.style.opacity = 0.2;
    } else {
      arrow.style.opacity = 1;
    }
  };

  arrowCheck(prevArrow);
  arrowCheck(nextArrow);

  nextArrow.addEventListener("click", () => {
    arrowCheck(prevArrow);
    arrowCheck(nextArrow);
  });

  prevArrow.addEventListener("click", () => {
    arrowCheck(prevArrow);
    arrowCheck(nextArrow);
  });
});

//prising-mobile

const features1 = document.querySelector("#features1");
const featuresItems1 = document.querySelector("#features-items1");
const featuresArrow1 = document.querySelector("#features-arrow1");

const features2 = document.querySelector("#features2");
const featuresItems2 = document.querySelector("#features-items2");
const featuresArrow2 = document.querySelector("#features-arrow2");

features1.addEventListener("click", function() {
  featuresArrow1.classList.toggle("features-arrow-rotate");
  featuresItems1.classList.toggle("features-items-show");
});

features2.addEventListener("click", function() {
  featuresArrow2.classList.toggle("features-arrow-rotate");
  featuresItems2.classList.toggle("features-items-show");
});
