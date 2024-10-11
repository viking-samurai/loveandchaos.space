//Declare your constants
const loveTopButton = document.querySelector(".love-top")
const loveNavFaith = document.querySelector('.love-nav-faith');
const loveNavTripping = document.querySelector('.love-nav-tripping');

loveTopButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

loveNavFaith.onclick = () => {
	const element = document.getElementById("faith");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

loveNavTripping.onclick = () => {
	const element = document.getElementById("tripping");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};