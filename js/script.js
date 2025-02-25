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
