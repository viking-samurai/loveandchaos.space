//Declare your constants
const pathTopButton = document.querySelector(".path-top")
const pathNavBecoming = document.querySelector('.path-nav-becoming');
const pathNavPTSD = document.querySelector('.path-nav-ptsd');

pathTopButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

pathNavBecoming.onclick = () => {
	const element = document.getElementById("becoming");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

pathNavPTSD.onclick = () => {
	const element = document.getElementById("ptsd");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};