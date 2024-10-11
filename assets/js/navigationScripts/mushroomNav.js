//Declare your constants
const mushroomTopButton = document.querySelector(".mushroom-top")
const mushroomNavEnergies = document.querySelector('.mushroom-nav-energies');
const mushroomNavPreparation = document.querySelector('.mushroom-nav-preparation');

mushroomTopButton.onclick = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

mushroomNavEnergies.onclick = () => {
	console.log("Working");
	const element = document.getElementById("energies");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};

mushroomNavPreparation.onclick = () => {
	const element = document.getElementById("preparation");
	element.scrollIntoView({behavior: 'smooth'});
	document.getElementById("body").classList.toggle("is-menu-visible");
};