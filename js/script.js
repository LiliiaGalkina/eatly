"use strict"

//меню-бургер

let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');


burger.addEventListener('click', func);

function func() {
   burger.classList.toggle('menu__burger_active');
	menu.classList.toggle('menu__list_active');
}

// слайдер

$(document).ready(function () {
	$('.slider').slick({
		infinite: false,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1
				}
			}
		]
	})
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
	}

	arrowCheck(prevArrow);
	arrowCheck(nextArrow);

	nextArrow.addEventListener("click", () => {
		arrowCheck(prevArrow);
   	arrowCheck(nextArrow);
	})

		prevArrow.addEventListener("click", () => {
      arrowCheck(prevArrow);
      arrowCheck(nextArrow);
    });

})
