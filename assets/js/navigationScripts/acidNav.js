//Declare your constants
const acidTopButton = document.querySelector(".acid-top")
const acidNavFrames = document.querySelector('.acid-nav-frames');
const acidNavEvolution = document.querySelector('.acid-nav-evolution');

acidTopButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

acidNavFrames.onclick = () => {
	const element = document.getElementById("frames");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

acidNavEvolution.onclick = () => {
	const element = document.getElementById("evolution");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};