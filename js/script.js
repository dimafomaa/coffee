$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu').toggleClass('open');
	});

	$('.menu__link').click(function (event) {
		$('.header__burger, .menu').removeClass('active');
		$('body').removeClass('lock');
	});

	$('.slider__filter').slick({
		arrows: false,
		dots: true,
		slidesToShow: 2,
		draggable: false,
		responsive: [
			{
				breakpoint: 1151,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.slider__combo--row').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		draggable: false,
		responsive: [
			{
				breakpoint: 1133,
				settings: {
					slidesToShow: 2,
				}
			},{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
				},
			}
		]
	});

	
	// const tabsBtn = document.querySelectorAll('.gift__tab--btn');
	// const tabsItems = document.querySelectorAll('.gift__value');

	// tabsBtn.forEach(onTabClick);

	// function onTabClick(item){
	// 	item.addEventListener('click', function () {
	// 		let currentBtn = item;
	// 		let tabId = currentBtn.getAttribute('data-tab');
	// 		let currentTab = document.querySelector(tabId);

	// 		if( ! currentBtn.classList.contains('active') ) {
	// 			tabsBtn.forEach(function (item) {
	// 				item.classList.remove('active');
	// 			});
	// 			tabsItems.forEach(function (item) {
	// 				item.classList.remove('active');
	// 			});

	// 			currentBtn.classList.add('active');
	// 			currentTab.classList.add('active');
	// 		}
	// 	});
	// }

	// document.querySelector('.gift__tab--btn').click();

});



const sr = ScrollReveal({
	origin: 'top',
	distance: '50px',
	duration: 2000,
	depay: 400, 
	reset: true
});

sr.reveal(`.home`, {origin: 'top'})
sr.reveal(`.home__title`, {origin: 'left'})
sr.reveal(`.base__descr`, {origin: 'top'})
sr.reveal(`.base__title`, {origin: 'bottom'})
sr.reveal(`.base__item--image`, {origin: 'top'})
sr.reveal(`.base__item`, {scale: 0.8})
sr.reveal(`.slider__filter`, {scale: 0.9})
sr.reveal(`.gift__img`, {origin: 'left'})
sr.reveal(`.gift__items`, {origin: 'top'})
sr.reveal(`.slider__combo--row`, {origin: 'bottom'})





