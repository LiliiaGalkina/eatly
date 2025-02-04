let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');


burger.addEventListener('click', func);

function func() {
   burger.classList.toggle('menu__burger_active');
	menu.classList.toggle('menu__list_active');
}